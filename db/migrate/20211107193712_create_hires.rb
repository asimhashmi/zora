class CreateHires < ActiveRecord::Migration[6.1]
  def change
    create_table :hires do |t|
      t.string :grade
      t.string :subject
      t.integer :weekly_hours
      t.string :duration
      t.float :price
      t.references :hire_by, index: true, foreign_key: { to_table: :users }
      t.references :hire_to, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
