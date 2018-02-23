# == Schema Information
#
# Table name: point_estimates
#
#  created_at   :datetime         not null
#  id           :integer          not null, primary key
#  points       :integer
#  subject_id   :integer
#  subject_type :string
#  updated_at   :datetime         not null
#

class PointEstimate < ApplicationRecord
  belongs_to :subject, polymorphic: true
end
