class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :masqueradable, :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable

  has_one_attached :avatar
  has_person_name

  has_many :notifications, as: :recipient, dependent: :destroy
  has_many :services, dependent: :destroy

  has_many :student_meetings, foreign_key: :student_id, class_name: "Meeting", dependent: :destroy
  has_many :teacher_meetings, foreign_key: :teacher_id, class_name: "Meeting", dependent: :destroy

  mount_uploader :id_card, DocumentUploader

  enum province: [:Eastern_Cape, :Free_State, :Gauteng, :KwaZulu_Natal, :Limpopo, :Mpumalanga, :Northern_Cape, :North_West, :Western_Cape]

  validates :first_name, :last_name, :email, presence: true

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
end
