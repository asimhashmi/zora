class AddBraintreeIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :braintree_id, :string
  end
end
