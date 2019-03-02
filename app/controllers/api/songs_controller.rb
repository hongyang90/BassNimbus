class Api::SongsController < ApplicationController
      before_action :require_login


    def index
      @songs = Song.all 
      render :index 
    end

    def show
      @song = Song.find(params[:id])
      render :show 
    end

    def create
      @song = Song.new(song_params)
      @song.artist_id = current_user.id;
      if @song.save
        render :show 
      else
        render json: ["Song Title can't be blank"], status: 401
      end
    end

    def update
      @song = current_user.songs.find(params[:id])
      if @song.update_attributes(song_params)
        render :show
      else
        render json: ["Song Title can't be blank"], status: 401
      end
    end

    def destroy
      @song = Song.find(params[:id])
      @song.destroy
        
    end

    private 
    def song_params
        params.require(:song).permit(:title)
    end
end
