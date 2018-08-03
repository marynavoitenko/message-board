class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at

  belongs_to :sender
  belongs_to :recipient
end
