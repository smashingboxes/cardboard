class RenameStoryColumns < ActiveRecord::Migration[5.1]
  def change
    rename_column :stories, :name, :slug
    rename_column :stories, :description, :summary
  end
end
