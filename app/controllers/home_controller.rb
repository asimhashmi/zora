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


private
def query_params
  query_params = params[:query]
  query_params ? query_params.permit(:first_name, :role) : {}
end