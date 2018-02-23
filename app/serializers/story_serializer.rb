class StorySerializer < ActiveModel::Serializer
  attributes :id, :slug, :summary, :status

  has_one :estimate
end
