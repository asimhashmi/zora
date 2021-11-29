class HomeController < ApplicationController

  before_action :authenticate_user!, except: [:index]

  def index
    if user_signed_in? && current_user.is_teacher?
      return redirect_to teacher_path
    elsif user_signed_in? && current_user.is_student?
      return redirect_to student_path
    end
  end

  def student_home
    @q = Role.find_by_name('teacher').users.where(:is_verified => true).ransack(params[:q])
    @teacher_list = @q.result(distinct: true)
  end

  def teacher_home
  end

  def frontend
  end

  def frontendtest
  end

  def terms
  end

  def privacy
  end
end


private
def query_params
  query_params = params[:query]
  query_params ? query_params.permit(:first_name, :role) : {}
end