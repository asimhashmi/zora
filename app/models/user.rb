class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :masqueradable, :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable

  scope :filtered, ->(query_params) { User::Filter.new.filter(self, query_params) }

  has_one_attached :avatar
  has_person_name

  has_many :notifications, as: :recipient, dependent: :destroy
  has_many :services, dependent: :destroy

  has_many :student_hires, foreign_key: :hire_by_id, class_name: "Hire", dependent: :destroy
  has_many :teacher_hires, foreign_key: :hire_to_id, class_name: "Hire", dependent: :destroy

  has_many :student_meetings, foreign_key: :student_id, class_name: "Meeting", dependent: :destroy
  has_many :teacher_meetings, foreign_key: :teacher_id, class_name: "Meeting", dependent: :destroy
  has_many :ratings, foreign_key: :ratee_id, class_name: "Rating", dependent: :destroy
  has_many :sent_ratings, foreign_key: :rater_id, class_name: "Rating", dependent: :destroy

  mount_uploader :id_card, DocumentUploader

  enum province: [:"Eastern Cape", :"Free State", :"Gauteng", :"KwaZulu Natal", :"Limpopo", :"Mpumalanga", :"Northern Cape", :"North West", :"Western Cape"]
  enum subject: [:English, :Math, :Chemistry, :Zulu]
  enum grade: [:"Grade 1", :"Grade 2", :"Grade 3", :"Grade 4"]
  enum tutor_type: [:"Registered Teacher", :"Student Tutor"]
  

  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  after_create :store_zoom_user_id

  def is_teacher?
    has_role?(:teacher)
  end

  def is_student?
    has_role?(:student)
  end

  def is_admin?
    has_role?(:admin)
  end

  def role_name
    roles_name.join(', ').titleize
  end

  def new_user?
    (Date.current - created_at.to_date).to_i < 30
  end

  def store_zoom_user_id
    service = Zoom::Api::CreateCustomerService.new(self).perform
    if service.success?
      update(zoom_user_id: service.resource['id'])
    else
      errors.add(:zoom, service.resource['message'])
    end
  end

  def self.search(search)
    if search
      where('first_name LIKE :keyword OR last_name LIKE :keyword OR email LIKE :keyword', keyword: "%#{search}%").limigt(10)
    else
      first(10)
    end
  end
end
