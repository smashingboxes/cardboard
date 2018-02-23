class CreatePointEstimates < ActiveRecord::Migration[5.1]
  def change
    create_table :point_estimates do |t|
      t.integer :points
      t.references :subject, polymorphic: true

      t.timestamps
    end
  end
end
