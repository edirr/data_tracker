class CreateTests < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|
      t.string :test_name
      t.date :date
      t.integer :grade
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
