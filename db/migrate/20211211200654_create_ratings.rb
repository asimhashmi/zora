class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.references :rater, index: true, foreign_key: { to_table: :users }
      t.references :ratee, index: true, foreign_key: { to_table: :users }
      t.string :message
      t.integer :stars

      t.timestamps
    end
  end
end
