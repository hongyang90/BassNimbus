class Api::CommentsController < ApplicationController
    # before_action :require_login


    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        @comment.song_id = params[:song_id]
        if @comment.save
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render 'api/comments/show'
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end


end
