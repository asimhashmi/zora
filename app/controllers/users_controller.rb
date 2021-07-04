class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def show
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
