json.extract! user, :id, :username
if user.photo.attached?
    json.photoUrl url_for(user.photo)
else 
    json.photoUrl ''
end 