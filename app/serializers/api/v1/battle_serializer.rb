class Api::V1::BattleSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :location, :winner

  belongs_to :creator, class_name: "User"
  has_many :comments
end
