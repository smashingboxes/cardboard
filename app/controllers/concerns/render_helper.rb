module RenderHelper
  extend ActiveSupport::Concern

  def render_failure_json(status: nil, errors: [], message: "Failure.")
    logger.error("### REQUEST FAILURE ###")
    logger.error(message: message)
    logger.error(errors: errors)
    render json: {
      meta: { success: false, message: message },
      errors: errors
    }, status: status
  end

  def render_success_json(data: {}, message: "Success!", serializer: nil)
    render_params = {
      json: data,
      meta: { success: true, message: message },
      status: 200,
      serializer_key(data) => serializer
    }
    render render_params.compact
  end

  def render_service(outcome: nil, serializer: nil, data: nil)
    if outcome.valid?
      render_service_success_json(outcome, serializer: serializer, data: data)
    else
      render_service_failure_json(outcome, full_messages: outcome&.errors&.messages)
    end
  end

  def render_service_success_json(outcome, serializer: nil, data: nil)
    data ||= outcome.result
    message = outcome.success_message
    render_success_json(data: data, message: message, serializer: serializer)
  end

  def render_service_failure_json(outcome, full_messages: nil)
    errors = outcome.errors
    message = outcome.failure_message
    render_failure_json(
      status: outcome.failure_status || 422,
      errors: errors.as_json.merge(full_messages: humanize_errors_hash(full_messages)),
      message: message
    )
  end

  def render_save(object)
    if object.save
      render_success_json(data: object)
    else
      render_failure_json(
        errors: object.errors.as_json.merge(full_messages: object.errors.full_messages),
        status: 422
      )
    end
  end

  def render_access_denied
    render_failure_json(status: 401, errors: "Access denied")
  end

  def serialize(data)
    ActiveModelSerializers::SerializableResource.new(data)
  end

  private

  def serializer_key(data)
    data.is_a?(ActiveRecord::Base) ? :serializer : :each_serializer
  end

  def humanize_errors_hash(full_messages)
    full_messages&.map do |error_key, message_array|
      message_array.flatten.map { |message| "#{error_key.to_s.humanize} #{message}" }
    end.flatten
  end
end
