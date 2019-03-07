json.user do
    json.set! user.id do 
        json.extract! user, :id, :username
        if user.photo.attached?
            json.photoUrl url_for(user.photo)
        else 
            json.photoUrl ''
        end 
    end 
end 


json.songs do
    user.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :artist_id
            if song.sound.attached?
                json.soundUrl url_for(song.sound)
            else
                json.soundUrl ''
            end
            if song.photo.attached?
                json.photoUrl url_for(song.photo)  
            else
                json.photoUrl ''
            end
        end
    end
end