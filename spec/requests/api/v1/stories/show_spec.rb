require "rails_helper"

describe "GET /api/v1/stories/:id", as: :request do
  subject { get "/api/v1/stories/#{story.id}", params: params }
  let(:story) { create(:story) }
  let(:params) { {} }

  include_context :story_fields

  it "returns 200" do
    subject
    expect(response).to be_success
  end

  it "returns an object representing the story" do
    subject
    expect(json_response["id"]).to eq(story.id)
    expect(json_response).to include(*story_fields)
  end
end
