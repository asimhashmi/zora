class Rating < ApplicationRecord
  validates_presence_of :ratee_id, :rater_id, :message
end
