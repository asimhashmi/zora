class Rating < ApplicationRecord
  validates_presence_of :ratee_id, :rater_id, :message

  has_many :likes, class_name: 'Like'
end
