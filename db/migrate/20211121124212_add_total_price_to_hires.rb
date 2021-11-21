class AddTotalPriceToHires < ActiveRecord::Migration[6.1]
  def change
    add_column :hires, :total_price, :float
  end
end
