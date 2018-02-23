# == Schema Information
#
# Table name: stories
#
#  created_at :datetime         not null
#  id         :integer          not null, primary key
#  project_id :integer
#  slug       :string
#  status     :string
#  summary    :text
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  include AASM

  belongs_to :project
  has_many :estimates,
           class_name: "PointEstimate",
           dependent: :destroy,
           inverse_of: :subject,
           as: :subject

  aasm column: 'status' do
    state :todo, initial: true
    state :in_progress
    state :qa_rejected
    state :code_review
    state :merged
    state :qa
    state :done
  end

  def estimate
    estimates.last
  end
end
