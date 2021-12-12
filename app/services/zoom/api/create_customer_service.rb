class Zoom::Api::CreateCustomerService < ApplicationService
  include HTTParty
  base_uri "https://api.zoom.us/v2/"

  def initialize(user)
    @token = Zoratutorr.credentials[:zoom_jwt_token]
    @user = user
  end

  def perform
    response = self.class.post(
      "/users",
      body: query,
      headers: headers
    )

    if response.success?
      Result.new(response, true)
    else
      Result.new(response["message"], false)
    end
  end

  private

  def headers
    { "authorization": "Bearer #{@token}", "Content-Type": "application/json" }
  end

  def query
    {
      "action": "create",
      "user_info": {
          "email": @user.email,
          "type": "1",
          "first_name": @user.first_name,
          "last_name": @user.last_name
      }
    }.to_json
  end
end