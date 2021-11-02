class Meeting < ApplicationRecord
  DURATIONS = [15, 30, 45, 60]
  belongs_to :student, class_name: "User"
  belongs_to :teacher, class_name: "User"

  validates :title, :time, presence: true
  after_destroy :destroy_zoom_meeting
  # validate :validate_duration

  def update_zoom_meeting_url(resource)
    self.update!(meeting_url: resource[:zoom_meeting_url], meeting_id: resource[:zoom_meeting_id])
  end

  private

  def destroy_zoom_meeting
    Zoom::Api::CancelMeetingService.new(meeting_id).perform
  end
end