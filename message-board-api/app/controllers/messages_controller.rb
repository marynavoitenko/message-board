class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def create
    end

    def show
    end

    def update
    end

    def destroy
    end
end
