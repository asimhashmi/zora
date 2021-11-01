class MeetingsController < ApplicationController
  before_action :set_meeting, only: %i[show edit update destroy]

  def index
    @meetings = Meeting.all
  end

  def show
  end


  def new
    @meeting = Meeting.new
    respond_to do |format|
      format.js {  }
    end
  end

  def edit
  end

  def create
    @meeting = Meeting.new(meeting_params)

    respond_to do |format|
      if @meeting.save
        format.html { redirect_to @meeting.student, notice: "Meeting was successfully created." }
      else
        format.js { render template: "meetings/create.js.erb" }
      end
    end
  end

  def update
    respond_to do |format|
      if @meeting.update(meeting_params)
        format.html { redirect_to @meeting, notice: "Meeting was successfully updated." }
        format.json { render :show, status: :ok, location: @meeting }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @meeting.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @meeting.destroy
    respond_to do |format|
      format.html { redirect_to meetings_url, notice: "Meeting was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_meeting
    @meeting = Meeting.find(params[:id])
  end

  def meeting_params
    params.require(:meeting).permit(:meeting_url, :title, :description, :start_time, :end_time, :purpose, :student_id, :teacher_id)
  end
end
