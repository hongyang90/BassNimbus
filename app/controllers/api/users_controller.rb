class Api::UsersController < ApplicationController
   
    def create
      @user = User.new(user_params)
      if @user.save
          login(@user)
          render partial: 'api/users/current_user', locals: { user: @user}
      else
          render json: @user.errors.full_messages, status: 422
      end
    end

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
        
    end

    def index
      @users = User.all
      
    end



    private
    def user_params
        params.require(:user).permit(:username, :password)
    end    

end
