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

  has_many :student_meetings, foreign_key: :student_id, class_name: "Meeting", dependent: :destroy
  has_many :teacher_meetings, foreign_key: :teacher_id, class_name: "Meeting", dependent: :destroy

  mount_uploader :id_card, DocumentUploader

  enum province: [:Eastern_Cape, :Free_State, :Gauteng, :KwaZulu_Natal, :Limpopo, :Mpumalanga, :Northern_Cape, :North_West, :Western_Cape]

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
