class ModelMailer < ApplicationMailer

    def new_message_notification(message, user)
        # @message_conversation = message.conversation
        
        # users_email = message.project.postusers.map{|postuser| postuser.user.email}.reject{|a| a == current_user_email}.join(",")
        # mail to: users_email, subject: "A new message has been sent!"
        # @user = params[:user]
        mail(to: "dami@omis.com", subject: '"A new message has been sent!')
      end

end
