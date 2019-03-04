json.extract! user, :id, :username
if user.photo.attached?
    json.photoUrl url_for(user.photo)
else 
    json.photoUrl ''
end 


json.songs do
    user.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :artist_id
            if song.sound.attached?
                json.soundURL url_for(song.sound)
            else
                json.soundURL ''
            end
            if 
                json.photoUrl url_for(song.photo)  
            else
                json.photoUrl ''
            end
        end
    end
end