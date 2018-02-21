class StorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status
end
