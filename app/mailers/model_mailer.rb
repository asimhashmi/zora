class ModelMailer < ApplicationMailer

    def new_message_notification(message, user)
        # @message_conversation = message.conversation
        # @user = user
        # users_email = message.project.postusers.map{|postuser| postuser.user.email}.reject{|a| a == current_user_email}.join(",")
        # mail to: users_email, subject: "A new message has been sent!"
        # @user = params[:user]
        # mail(to: user.email, subject: 'You have received a new message')


        # Fix the email receipent
        @user = user
        mail(:to => user, :subject => "You have received a new message")
      end

end
