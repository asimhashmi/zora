class MessagesController < ApplicationController
    before_action do
        @conversation = Conversation.find(params[:conversation_id])
    end
    
    def index
        # byebug
        @messages = @conversation.messages if @conversation.sender_id || @conversation.recipient_id == current_user.id
        @message = @conversation.messages.new
        # @message = Message.new(conversation: @conversation)
    end
    
    def new
        @message = @conversation.messages.new
    end

    def create
        @message = @conversation.messages.new(message_params)
        @user = current_user
        if @message.save
            ModelMailer.new_message_notification(@message, current_user.email).deliver_now
            redirect_to conversation_messages_path(@conversation), notice: 'Message sent sucessfully.'
        end
    end

    private
    def message_params
        params.require(:message).permit(:body, :user_id)
    end
end
