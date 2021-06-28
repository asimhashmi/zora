class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :masqueradable, :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable

  has_one_attached :avatar
  has_person_name

  has_many :notifications, as: :recipient
  has_many :services

  enum role: [:Student, :Teacher]
  enum province: [:Eastern_Cape, :Free_State, :Gauteng, :KwaZulu_Natal, :Limpopo, :Mpumalanga, :Northern_Cape, :North_West, :Western_Cape]
end
