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
        render json: @message
    end

    def update
        if @message.update(message_params)
            render json: @message
        else
            render json: { message: 'Message was not updated.' }, status: 422
        end
    end

    def destroy
        if @message.destroy
            render json: { message: 'Successfully Deleted Message' }, status: 204
        else
            render json: { message: 'Unable to Delete'}, status: 422
        end
    end

    def most_recent
        render json: Message.most_recent
    end

    private

    def message_params
        params.require(:message).permit(:content, :sender_id, :recipient_id, sender_attributes: [:name], recipient_attributes: [:name])
    end

    def set_message
        @message = Message.find(params[:id])
    end
end
