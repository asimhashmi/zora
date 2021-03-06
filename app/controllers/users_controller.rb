class UsersController < ApplicationController
  before_action :authorize_user!, only: %i[show]
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
 
    @pagy, @user_reviews = pagy(@user.ratings.reorder(params[:sort] == 'Oldest' ? 'created_at ASC' : 'created_at DESC' ))


    ratings = @user.ratings
    star_arr = []

    star_arr << ratings.select {|e| e.stars == 1}
    star_arr << ratings.select {|e| e.stars == 2}
    star_arr << ratings.select {|e| e.stars == 3}
    star_arr << ratings.select {|e| e.stars == 4}
    star_arr << ratings.select {|e| e.stars == 5}
    score_total = 0
    star_arr.each_with_index do |stars, index| 
      res = stars.length * (index + 1)
      score_total += res 
    end

    total_rating =  score_total.fdiv(ratings.length)
    @total_rating = total_rating


    # if Conversation.between(params[:sender_id], params[:recipient_id]).present? 
    #     @conversation = Conversation.between(params[:sender_id], params[:recipient_id]).first
    # else
    #     @conversation = Conversation.create!(conversation_params)
    # end
    # redirect_to conversation_messages_path(@conversation)
  end

  def sort_column
    %w{ created_at }.include?(params[:sort]) ? params[:sort] : "created_at"
  end

  def sort_direction
    %w{ asc desc }.include?(params[:Oldest]) ? params[:Oldest] : "asc"
  end
  private

  def set_user
    @user = User.find(params[:id])
  end

  def conversation_params
      params.permit(:sender_id, :recipient_id)
  end

  def authorize_user!
    if current_user.is_teacher? &&
     !(Hire.find_by(hire_by_id: current_user.id, hire_to_id: params[:id]).present? || 
      Hire.find_by(hire_by_id: params[:id], hire_to_id: current_user.id).present?) &&
      !Conversation.between(current_user.id, params[:id]).present? 

      redirect_to root_path, notice: 'You are not authorized to access this page'
    end
  end
end
