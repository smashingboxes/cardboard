class AddDescriptionToStory < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :description, :text
  end
end
