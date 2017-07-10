class Battle < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  belongs_to :battle
end
