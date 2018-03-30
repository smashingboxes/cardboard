require "rails_helper"

describe "GET /api/v1/projects/:id", type: :request do
  subject("request") { get "/api/v1/projects/#{project.id}", params: params }

  let(:project) { create(:project) }
  let(:params) { {} }

  include_context :project_fields
  include_context :story_fields

  it "returns 200" do
    request
    expect(response).to be_success
  end

  it "returns an object representing the project" do
    request
    expect(json_response["id"]).to eq(project.id)
    expect(json_response).to include(*project_fields)
    expect(json_response["stories"]).to all(include(*story_fields))
  end
end
