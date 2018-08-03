class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { message: 'User was not created' }, status: 422
        end
    end

    def show
        render json: @user
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: { message: 'Message was not updated.' }, status: 422
        end
    end

    def destroy
        if @user.destroy
            render json: { message: 'Successfully Deleted Message' }, status: 204
        else
            render json: { message: 'Unable to Delete'}, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

    def set_user
        @user = User.find(params[:id])
    end
end
