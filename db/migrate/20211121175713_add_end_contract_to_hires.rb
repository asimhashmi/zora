class AddEndContractToHires < ActiveRecord::Migration[6.1]
  def change
    add_column :hires, :end_contract, :date
  end
end
