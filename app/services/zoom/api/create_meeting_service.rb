class Zoom::Api::CreateMeetingService < ApplicationService
  attr_accessor :host_id, :meeting

  include HTTParty
  base_uri "https://api.zoom.us/v2/"

  def initialize(meeting)
    @token     = Zoratutorr.credentials[:zoom_jwt_token]
    @host_id   = Zoratutorr.credentials[:zoom_user_id]
    @meeting = meeting
  end

  def perform
    response = self.class.post("/users/#{host_id}/meetings", headers: headers, body: query)
    if response.success?
      meeting_info = {
        zoom_meeting_url: response["join_url"],
        zoom_meeting_id: response["id"]
      }
      Result.new(meeting_info, true)
    else
      Result.new(response["message"], false)
    end
  end

  def headers
    { "authorization": "Bearer #{@token}", "Content-Type": "application/json" }
  end

  def query
    {
      "topic": "1:1 Session #{meeting.teacher.name} with #{meeting.student.name}",
      "type": 2,
      "start_time": meeting.time,
      "duration": meeting.duration,
      "settings": {
          "mute_upon_entry": true,
          "waiting_room": true,
          "in_meeting": true,
          "join_before_host": true
      }
    }.to_json
  end
end
