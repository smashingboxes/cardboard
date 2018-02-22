class StorySerializer < ActiveModel::Serializer
  attributes :id, :slug, :summary, :status
end
