class PointEstimateSerializer < ActiveModel::Serializer
  attributes :id, :value, :type

  def value
    object.points
  end

  def type
    :points
  end
end
