class AddSubjectToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :subject, :integer
    add_column :users, :grade, :integer
    add_column :users, :years_of_experience, :integer
    add_column :users, :tutor_type, :integer
  end
end
