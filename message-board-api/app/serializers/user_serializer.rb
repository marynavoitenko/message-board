class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :sent_messages
  has_many :received_messages
end
