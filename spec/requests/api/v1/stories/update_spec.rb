require "rails_helper"

describe "PATCH /api/v1/stories/:id", as: :request do
  subject { patch "/api/v1/stories/#{story.id}", params: params }
  let!(:story) { create(:story) }
  let(:params) { attributes_for(:story) }

  context "with valid params" do
    it "returns 200" do
      subject
      expect(response).to be_success
    end

    it "updates the tour" do
      subject
      story.reload
      expect(story.slug).to eq(params[:slug])
      expect(story.status).to eq(params[:status].to_s)
      expect(story.summary).to eq(params[:summary])
    end
  end
end
