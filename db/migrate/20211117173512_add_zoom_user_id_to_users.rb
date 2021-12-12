class AddZoomUserIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :zoom_user_id, :string
  end
end
