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

  has_many :comments
  has_many :battles, foreign_key: :creator_id
end
