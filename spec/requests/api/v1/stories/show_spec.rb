require "rails_helper"

describe "GET /api/v1/stories/:id", type: :request do
  subject('request') { get "/api/v1/stories/#{story.id}", params: params }

  let(:story) { create(:story) }
  let(:params) { {} }

  include_context :story_fields

  it "returns 200" do
    request
    expect(response).to be_success
  end

  it "returns an object representing the story" do
    request
    expect(json_response["id"]).to eq(story.id)
    expect(json_response).to include(*story_fields)
  end
end
