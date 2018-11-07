class CreateMathTests < ActiveRecord::Migration[5.2]
  def change
    create_table :math_tests do |t|
      t.string :math_test_name
      t.date :date
      t.integer :grade
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
