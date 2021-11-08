class HiresController < ApplicationController
  before_action :authenticate_user!

  def index
    @hires = Hire.all
  end

  def show
  end

  def new
    @hire = Hire.new
    respond_to do |format|
      format.js {  }
    end
  end

  def edit
  end

  def create
    @hire = Hire.new(hire_params)

    respond_to do |format|
      if @hire.save

        format.html { redirect_to @hire.hire_by, notice: "Hired successfully." }
      else
        format.js { render template: "hires/create.js.erb" }
      end
    end
  end

  def update
    respond_to do |format|
      if @hire.update(hire_params)
        format.html { redirect_to @hire, notice: "Hire was successfully updated." }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @hire.destroy
    respond_to do |format|
      format.html { redirect_to @hire.student, notice: "Hire was successfully canceled." }
    end
  end

  private

  def set_hire
    @hire = Hire.find(params[:id])
  end

  def hire_params
    params.require(:hire).permit(:grade, :subject, :weekly_hours, :price, :duration, :hire_by_id, :hire_to_id)
  end
end
