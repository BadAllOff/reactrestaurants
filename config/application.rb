require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Reactrestaurants
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    Rails.application.config.assets.configure do |env|
      env.register_transformer 'text/ecmascript-6', 'application/javascript',
          Sprockets::ES6.new('modules' => 'system', 'moduleIds' => true)
    end
  end
end
