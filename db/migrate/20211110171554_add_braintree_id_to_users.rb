class AddBraintreeIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :braintree_id, :string

    add_column :hires, :nonce_id, :string
    add_column :hires, :status, :string
  end
end
