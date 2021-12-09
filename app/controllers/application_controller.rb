class ApplicationController < ActionController::Base
  include Pundit

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :masquerade_user!
  require 'carrierwave/orm/activerecord'


  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :role_ids])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :avatar, :role_ids, :bio, :province, :address, :price, :birth_date, :id_card, :subject, :grade, :years_of_experience, :tutor_type])
    end

end
