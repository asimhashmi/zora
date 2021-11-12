class HiresController < ApplicationController
  before_action :authenticate_user!

  def new
    @hire = Hire.new
  end

  def create
     @hire = Hire.new(hire_params)
    # if current_user.braintree_id?
    #   customer = Braintree::Customer.find(current_user.braintree_id)
    # else
    #   byebug
    #   result = Braintree::Customer.create(
    #     email: current_user.email,
    #     payment_method_nonce: params[:braintree_payment_id]
    #   )
    #   customer = result.customer
    #   current_user.update(braintree_id: customer.id)
    # end

    result = Braintree::Transaction.sale(
      :amount => "10.00",
      :payment_method_nonce => params[:braintree_payment_id],
      :options => {
        :submit_for_settlement => true
      }
    )

    if result.success?
      @hire.braintree_payment_id= result.transaction.id
      if @hire.save
        return redirect_to @hire.hire_by, notice: "Hired successfully."
      end
    elsif result.transaction
      return redirect_to root_path, alert: "Error processing transaction:"
    else
      return redirect_to root_path, alert: "Error Try Again"
    end
    redirect_to root_path
  end

  private

  def hire_params
    params.permit(:grade, :subject, :number_of_session, :price, :duration, :hire_by_id, :hire_to_id, :braintree_payment_id)
  end
end
