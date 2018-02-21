class Api::V1::ProjectsController < Api::V1::ApiController
  def index
    render_success_json(data: Project.all)
  end

  def show
    render_success_json(data: project)
  end

  private

  def project
    @project ||= Project.find(params[:id])
  end
end
