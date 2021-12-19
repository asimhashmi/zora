class HiresController < ApplicationController
  before_action :authenticate_user!

  def index
    @hires = Hire.all
  end

  def show
    @hire = Hire.find(params[:id])
  end

  def new
    @hire = Hire.new
  end

  def create
     @hire = Hire.new(hire_params)
     @hire.total_price = @hire.price * @hire.number_of_session * @hire.duration
     @hire.status = "requested"
    if @hire.save
      return redirect_to root_path, notice: "Hire Requested."
    end
    redirect_to root_path
  end

  def edit
    @hire = Hire.find(params[:id])
  end

  def update
    @hire = Hire.find(params[:id])

    if params[:status].present? && params[:status] == "hired"
      payment_proceed
      @hire.update(end_contract: @hire.duration.weeks.from_now)

      HireMailer.with(hire: @hire).contract_email.deliver_now

      if @hire.update(hire_params)
        return redirect_to root_path, notice: "Hired successfully."
      else
        return redirect_to root_path, notice: "Not Hired"
      end

    elsif params[:status].present? && params[:status] == "requested"
      HireMailer.with(hire: @hire).hiring_email.deliver_now

      if @hire.update(hire_params)
        return redirect_to root_path, notice: "Hiring Request Sent successfully."
      else
        return redirect_to root_path, notice: "Not Sent Try Again"
      end

    elsif params[:status].present? && params[:status] == "reject"
      if @hire.update(hire_params)
        return redirect_to root_path, notice: "Hiring Rejected successfully."
      else
        return redirect_to root_path, notice: " Try Again"
      end

    elsif params[:status].present? && params[:status] == "processing"
      if @hire.update(hire_params)
        return redirect_to root_path, notice: "Acceptance Sent."
      else
        return redirect_to root_path, notice: " Try Again"
      end
    end
  end

  private

  def hire_params
    params.permit(:grade, :subject, :number_of_session, :price, :duration, :hire_by_id, :hire_to_id, :nonce_id, :status)
  end

  def payment_proceed
    @hire = Hire.find(params[:id])
    result = Braintree::Transaction.sale(
        :amount => @hire.total_price,
        :payment_method_nonce => @hire.nonce_id,
        :options => {
          :submit_for_settlement => true
        }
      )
  end
end
