class Comment < ApplicationRecord
  validates :name, presence: true

  belongs_to :battle
  belongs_to :user

end
