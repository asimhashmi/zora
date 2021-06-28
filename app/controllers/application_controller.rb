class ApplicationController < ActionController::Base
  include Pundit

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :masquerade_user!

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :role])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :avatar, :role, :bio, :province, :address, :birth_date, :id_card])
    end
    
end
