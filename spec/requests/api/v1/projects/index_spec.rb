require "rails_helper"

describe "GET /api/v1/projects", as: :request do
  subject { get "/api/v1/projects", params: params }
  let!(:projects) { create_list(:project, 3) }
  let(:params) { {} }

  include_context :project_fields
  include_context :story_fields

  it "returns 200" do
    subject
    expect(response).to be_success
  end

  it "returns an array of projects" do
    subject
    expect(json_response.length).to eq(projects.length)
    expect(json_response).to all(include(*project_fields))
  end
end
