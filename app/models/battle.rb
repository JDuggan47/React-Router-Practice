class Battle < ApplicationRecord
  validates :name, presence: true
  validates :year, presence: true
  validates :location, presence: true
  validates :winner, presence: true

end