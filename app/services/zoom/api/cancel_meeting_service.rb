class Zoom::Api::CancelMeetingService < ApplicationService
  attr_accessor :host_id, :meeting_id

  include HTTParty
  base_uri "https://api.zoom.us/v2/"

  def initialize(meeting_id, host_id = Zoratutorr.credentials[:zoom_user_id])
    @token     = Zoratutorr.credentials[:zoom_jwt_token]
    @host_id   = host_id
    @meeting_id = meeting_id
  end

  def perform
    response = self.class.delete("/meetings/#{meeting_id}", headers: headers)
    if response.success?
      Result.new(nil, true)
    else
      Result.new(response["message"], false)
    end
  end

  def headers
    { "authorization": "Bearer #{@token}", "Content-Type": "application/json" }
  end
end
