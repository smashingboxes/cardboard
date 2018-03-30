require "rails_helper"

describe "POST /api/v1/stories", type: :request do
  subject("request") { post "/api/v1/stories", params: params }

  let(:project) { create(:project) }
  let(:params) do
    attributes_for(:story)
      .merge(project_id: project.id)
  end

  context "with valid params" do
    let(:created_story) { Story.last }

    it "returns 200" do
      request
      expect(response).to be_success
    end

    it "creates a story" do
      expect { request }.to change(Story, :count).by(1)
    end

    it "assigns the right attributes" do
      request
      expect(created_story.slug).to eq(params[:slug])
      expect(created_story.summary).to eq(params[:summary])
      expect(created_story.description).to eq(params[:description])
      expect(created_story.project.id).to eq(params[:project_id])
    end
  end
end
