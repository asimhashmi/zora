class AddPriceToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :price, :float
  end
end
