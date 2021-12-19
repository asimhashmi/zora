class Hire < ApplicationRecord
  belongs_to :hire_by, class_name: 'User'
  belongs_to :hire_to, class_name: 'User'
end
