class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.references :project, foreign_key: true
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
