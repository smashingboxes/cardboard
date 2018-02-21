# == Schema Information
#
# Table name: stories
#
#  created_at  :datetime         not null
#  description :text
#  id          :integer          not null, primary key
#  name        :string
#  project_id  :integer
#  updated_at  :datetime         not null
#

class Story < ApplicationRecord
  belongs_to :project
end
