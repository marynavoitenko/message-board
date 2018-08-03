class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def create
        message = Message.new(message_params)
        if message.save
            render json: message
        else
            render json: { message: 'Message was not created' }, status: 422
        end
    end

    def show
    end

    def update
    end

    def destroy
    end

    private

    def message_params
        params.require(:message).permit(:content, :sender_id, :recipient_id)
    end
end
