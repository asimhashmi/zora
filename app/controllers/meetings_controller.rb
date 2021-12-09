class MeetingsController < ApplicationController
  before_action :authenticate_user!
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
        result = Zoom::Api::CreateMeetingService.new(@meeting).perform
        @meeting.update_zoom_meeting_url(result.resource) if result.success?

        # redirect_to(:hires_path)
        # redirect_back(fallback_location: root_path)
        format.html { redirect_to meetings_path, notice: "Meeting was successfully created." }
      else
        format.js { render template: "meetings/create.js.erb" }
      end
    end
  end

  def update
    respond_to do |format|
      if @meeting.update(meeting_params)
        format.html { redirect_to @meeting, notice: "Meeting was successfully updated." }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @meeting.destroy
    respond_to do |format|
      format.html { redirect_to @meeting.student, notice: "Meeting was successfully canceled." }
    end
  end

  private

  def set_meeting
    @meeting = Meeting.find(params[:id])
  end

  def meeting_params
    params.require(:meeting).permit(:meeting_url, :title, :description, :time, :duration, :purpose, :student_id, :teacher_id)
  end
end
