class Api::V1::BattleSerializer < ActiveModel::Serializer
  attributes :name, :year, :location, :winner

  belongs_to :creator, class_name: "User"
  has_many :comments
  has_many :users, through: :comments
end
