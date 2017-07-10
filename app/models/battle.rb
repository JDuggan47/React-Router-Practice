class Battle < ApplicationRecord
  validates :name, presence: true
  validates :year, presence: true
  validates :location, presence: true
  validates :winner, presence: true

  validates :contributor_id, presence: true

  belongs_to :contributor, class_name: "User"
  has_many :comments
end
