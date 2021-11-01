class Meeting < ApplicationRecord
  belongs_to :student, class_name: "User"
  belongs_to :teacher, class_name: "User"

  validates :title, presence: true
  validate :validate_duration

  private

  def validate_duration
    if start_time.nil?
      errors.add(:start_time, 'must be selected')
    elsif end_time.nil?
      errors.add(:end_time, 'must be selected')
    elsif start_time >= end_time
      errors.add(:end_time, 'must be later than start time')
    elsif total_time > 60.minutes
      errors.add(:meeting, 'cannot be longer than 60 mins')
    end
  end

  def total_time
    return 0 if start_time.nil? || end_time.nil?

    end_time - start_time
  end
end