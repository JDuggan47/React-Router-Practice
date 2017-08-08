class Battle < ApplicationRecord
  validates :name, presence: true
  validates :year, presence: true
  validates :location, presence: true
  validates :winner, presence: true

  belongs_to :creator, class_name: "User"
  has_many :comments
  has_many :users, through: :comments
end
