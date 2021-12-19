require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

Dotenv::Railtie.load if ['development', 'test'].include? ENV['RAILS_ENV']

module Zoratutorr
  class Application < Rails::Application
    config.active_job.queue_adapter = :sidekiq
    config.application_name = Rails.application.class.module_parent_name
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    config.time_zone = "Africa/Johannesburg"
    # config.eager_load_paths << Rails.root.join("extras")
  end

  def self.credentials
    @credentials ||= Rails.application.credentials[Rails.env.to_sym]
  end
end
