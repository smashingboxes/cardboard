class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :stories, serializer: StoryUnderProjectSerializer
end
