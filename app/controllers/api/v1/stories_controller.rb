class Api::V1::StoriesController < Api::V1::ApiController
  def create
    story = Story.new(story_params)
    render_save(story)
  end

  def show
    render_success_json(data: story)
  end

  private

  def story
    @story ||= Story.find(params[:id])
  end

  def story_params
    params.permit(
      :slug,
      :summary,
      :project_id
    )
  end
end
