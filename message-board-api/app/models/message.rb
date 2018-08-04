class Message < ApplicationRecord
    belongs_to :sender, :class_name => 'User', :foreign_key => 'sender_id', required: false
    belongs_to :recipient, :class_name => 'User', :foreign_key => 'recipient_id', required: false

    validates :content, presence: true
end
