class Hire < ApplicationRecord
  DURATIONS = ["Week", "Month", "Year"]

  belongs_to :hire_by, class_name: 'User'
  belongs_to :hire_to, class_name: 'User'

end
