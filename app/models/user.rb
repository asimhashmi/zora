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

  mount_uploader :id_card, DocumentUploader

  enum province: [:"Eastern Cape", :"Free State", :"Gauteng", :"KwaZulu Natal", :"Limpopo", :"Mpumalanga", :"Northern Cape", :"North West", :"Western Cape"]
  enum subject: [:English, :Math, :Chemistry, :Zulu]
  enum grade: [:"Grade 1", :"Grade 2", :"Grade 3", :"Grade 4"]
  enum tutor_type: [:"Registered Teacher", :"Student Tutor"]
  

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

  def self.search(search)
    if search
      find(:all, :conditions => ['first_name LIKE ?', "%#{search}%"])
    else
      find(1..10)
    end
  end
end
