class RatingsController < ApplicationController
  def create 

  rating =  Rating.create(stars: params[:rating][:stars], message: params[:rating][:message], ratee_id: params[:rating][:ratee], rater_id: current_user.id  )

    if rating.save
      redirect_to user_path(rating.ratee_id), notice: 'review sent'
    else
      redirect_to user_path(rating.ratee_id), alert: 'review sent'
    end
  end


 private 
 def rating_params
  params.require(:rating).permit(:stars, :message, ratee_id:  :ratee).merge(rater_id: current_user)
 end 
end
