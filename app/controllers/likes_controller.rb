class LikesController < ApplicationController

  def create
    rating = Rating.find(params[:like][:rating_id])
    rating_likes =  rating.likes.where(user_id: current_user.id)
    if rating_likes 
    
      redirect_to user_path(rating.ratee_id)
    else
      like =  rating.likes.build(user: current_user)
      if like.save
        redirect_to user_path(rating.ratee_id)
      else
        redirect_to user_path(rating.ratee_id)
      end
    end

  end

end
