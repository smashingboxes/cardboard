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

  aasm column: 'status' do
    state :todo, initial: true
    state :in_progress
    state :qa_rejected
    state :code_review
    state :merged
    state :qa
    state :done
  end

  # TODO: Make this actually work
  def estimate
    type = %i(points timebox).sample
    possible_values = type == :points ? [1, 2, 3, 5, 8, 13] : [1, 2, 3, 4, 5]
    {
      type: type,
      value: possible_values.sample
    }
  end
end
