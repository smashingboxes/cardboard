# == Schema Information
#
# Table name: stories
#
#  created_at  :datetime         not null
#  description :text
#  id          :integer          not null, primary key
#  name        :string
#  project_id  :integer
#  status      :string
#  updated_at  :datetime         not null
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
end
