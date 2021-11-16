class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def index
      # @user = User.search(params[:search])
      @q = User.ransack(params[:q])
      @user = @q.result(distinct: true)
  end

  def show
    if @user.is_student?
      @meetings = @user.student_meetings.where(teacher: current_user)
    elsif @user.is_teacher?
      @meetings = @user.teacher_meetings.where(student: current_user)
    end

    # if Conversation.between(params[:sender_id], params[:recipient_id]).present? 
    #     @conversation = Conversation.between(params[:sender_id], params[:recipient_id]).first
    # else
    #     @conversation = Conversation.create!(conversation_params)
    # end
    # redirect_to conversation_messages_path(@conversation)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def conversation_params
      params.permit(:sender_id, :recipient_id)
  end
end
