json.song do 
    json.set! @song.id do
        json.extract! @song, :id, :artist_id, :title
        if @song.photo.attached? 
             json.photoUrl url_for(@song.photo)
        else 
            json.photoUrl ''
        end
        if @song.sound.attached? 
            json.soundUrl url_for(@song.sound)
        else 
            json.soundUrl ''
        end

    end
end 

json.comments do
    @song.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id, :song_id
        end 
    end 
end