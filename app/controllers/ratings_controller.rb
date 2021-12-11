class RatingsController < ApplicationController
  def create 
    p params
  # rating =  current_user.ratings.build(rating_params)
  #   if raring.save
  #     redirect_to users_path, notice: 'review sent'
  #   else
  #     redirect_to users_path, notice: 'review sent'
      
  #   end
  end


 private 
 def rating_params
  params.require(:rating).permit(:stars, :message)
 end 
end
