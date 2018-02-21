class AddStatusToStories < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :status, :string
  end
end
