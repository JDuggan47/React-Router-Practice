class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4, maximum: 16 }
  validates :username, format: { with: /\A(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,17}\z/,
    message: "can only contain characters a-z, 0-9, underscores and periods" }

  validates :email, presence: true, email: true
  validates :email, uniqueness: true

  validates :encrypted_password, presence: true
  validates :encrypted_password, length: { minimum: 6 }

  has_many :comments
  has_many :battles
  has_many :contributed_battles, foreign_key: "contributor_id", class_name: "Battle"
end
