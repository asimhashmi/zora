module ApplicationHelper
  include Pagy::Frontend
  def role_name
    current_user.roles.last&.name&.capitalize
  end
end
