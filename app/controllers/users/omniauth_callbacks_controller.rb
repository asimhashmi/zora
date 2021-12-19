module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController
    # before_action :set_service
    # before_action :set_user

    attr_reader :service, :user

    # def facebook
    #   handle_auth "Facebook"
    # end

    # def twitter
    #   handle_auth "Twitter"
    # end

    # def github
    #   handle_auth "Github"
    # end

    def facebook
      @user = User.from_omniauth(request.env["omniauth.auth"])
      if @user.persisted?
          sign_in @user
          set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
          redirect_to root_path
        else
          session["devise.facebook_data"] = request.env["omniauth.auth"].except(:extra)
          redirect_to new_user_registration_url
        end
    end

    def google_oauth2
      @user = User.from_omniauth(request.env['omniauth.auth'])
      if @user.persisted?
        sign_in @user
        set_flash_message(:notice, :success, kind: 'Google') if is_navigational_format?
        redirect_to root_path
      else
        flash[:error] = 'There was a problem signing you in through Google. Please register or try signing in later.'
        redirect_to new_user_registration_url
      end
    end


    def failure
      redirect_to root_path
    end

    private

    def handle_auth(kind)
      if service.present?
        service.update(service_attrs)
      else
        user.services.create(service_attrs)
      end

      if user_signed_in?
        flash[:notice] = "Your #{kind} account was connected."
        redirect_to edit_user_registration_path
      else
        sign_in_and_redirect user, event: :authentication
        set_flash_message :notice, :success, kind: kind
      end
    end

    def auth
      request.env['omniauth.auth']
    end

    def set_service
      @service = Service.where(provider: auth.provider, uid: auth.uid).first
    end

    def set_user
      if user_signed_in?
        @user = current_user
      elsif service.present?
        @user = service.user
      elsif User.where(email: auth.info.email).any?
        # 5. User is logged out and they login to a new account which doesn't match their old one
        flash[:alert] = "An account with this email already exists. Please sign in with that account before connecting your #{auth.provider.titleize} account."
        redirect_to new_user_session_path
      else
        @user = create_user
      end
    end

    def service_attrs
      expires_at = auth.credentials.expires_at.present? ? Time.at(auth.credentials.expires_at) : nil
      {
          provider: auth.provider,
          uid: auth.uid,
          expires_at: expires_at,
          access_token: auth.credentials.token,
          access_token_secret: auth.credentials.secret,
      }
    end

    def create_user
      User.create(
        email: auth.info.email,
        #name: auth.info.name,
        password: Devise.friendly_token[0,20]
      )
    end

  end
end
