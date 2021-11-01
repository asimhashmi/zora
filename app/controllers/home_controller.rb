class HomeController < ApplicationController

  before_action :authenticate_user!, except: [:index]

  def index
  end

  def student_home
    @teacher_list = Role.find_by_name('teacher').users.where(:is_verified => true)
  end

  def teacher_home
  end

  def terms
  end

  def privacy
  end
end
