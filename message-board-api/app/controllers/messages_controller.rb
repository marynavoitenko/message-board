class MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update, :destroy]
    
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

    def set_message
        @message = Message.find(params[:id])
    end
end
