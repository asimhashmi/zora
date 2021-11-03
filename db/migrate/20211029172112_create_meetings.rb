class CreateMeetings < ActiveRecord::Migration[6.1]
  def change
    create_table :meetings do |t|
      t.string :meeting_url
      t.string :meeting_id
      t.string :title
      t.text :description
      t.datetime :time
      t.integer :duration
      t.string :purpose
      t.integer :student_id
      t.integer :teacher_id

      t.timestamps
    end
  end
end
