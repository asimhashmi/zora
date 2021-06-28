class HomeController < ApplicationController

  before_action :authenticate_user!, except: [:index]

  def index
    if user_signed_in? && current_user.role == "Teacher"
      return redirect_to teacher_path
    elsif user_signed_in? && current_user.role == "Student"
      return redirect_to student_path
    end
  end

  def student_home
    # byebug
    @teacher_list = User.where(role: [:Teacher]).where(:is_verified => true)
  end

  def teacher_home
  end

  def terms
  end

  def privacy
  end
end
