class Message < ApplicationRecord
    belongs_to :sender, :class_name => 'User', :foreign_key => 'sender_id', required: false
    belongs_to :recipient, :class_name => 'User', :foreign_key => 'recipient_id', required: false

    validates :content, presence: true

    def self.most_recent
        # Message.order('created_at DESC')
        # Fix N + 1
        Message.includes(:sender, :recipient).order('created_at DESC')
    end

    def sender_attributes=(sender_attributes)
        sender = User.find_or_create_by(sender_attributes) 
        self.sender = sender
    end

    def recipient_attributes=(recipient_attributes)
        recipient = User.find_or_create_by(recipient_attributes) 
        self.recipient = recipient
    end
end
