@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :artist_id
        if song.photo.attached? 
            json.photoUrl url_for(song.photo)
        else 
            json.photoUrl ''
        end
         if song.sound.attached? 
            json.soundUrl url_for(song.sound)
        else 
            json.soundUrl ''
        end
    end
end