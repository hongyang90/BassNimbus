# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


user0 = User.create(username: "hunter12", password: "password")
user1 = User.create(username: "Hong", password: "password")
user2 = User.create(username: "DemoUser", password: "password")
user3 = User.create(username: "Kevin", password: "password")
user4 = User.create(username: "Vivian", password: "password")
#  user1.photo.attach(io: File.open('app/assets/images/profilepics/pfpic.jpg'), filename: 'pfpic.jpg')
 
Song.destroy_all
song1 = Song.create(title: 'Beautiful Creatures', artist_id: user1.id)
song2 = Song.create(title: 'Fractures', artist_id: user1.id)
song3 = Song.create(title: 'High on Life', artist_id: user1.id)
song4 = Song.create(title: 'Without You', artist_id: user1.id)
song5 = Song.create(title: 'Troubled', artist_id: user2.id)
song6 = Song.create(title: 'Shelter', artist_id: user2.id)
song7 = Song.create(title: 'Higher Ground', artist_id: user2.id)
song8 = Song.create(title: 'Don\'t Let Me Down', artist_id: user2.id)
song9 = Song.create(title: 'Dreamer', artist_id: user3.id)
song10 = Song.create(title: 'More Than You Know', artist_id: user3.id)
song11 = Song.create(title: 'Just For A Moment', artist_id: user3.id)
song12 = Song.create(title: 'First Time', artist_id: user4.id)
song1.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song2.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song3.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song4.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song5.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song6.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song7.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song8.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song9.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song10.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song11.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song12.photo.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusArt/1.jpg'), filename: '1.jpg')
song1.sound.attach(io: File.open('/Users/KanyeMain/Desktop/BassNimbusmusic/1.m4a'), filename: '1.m4a')
# song13 = Song.create(title: 'It Ain\t Me', artist_id: user4.id)
# song14 = Song.create(title: 'Smoke Filled Room', artist_id: user4.id)
# song15 = Song.create(title: 'Everyday Everyday', artist_id: user4.id)
# song16 = Song.create(title: 'Saving Light', artist_id: user4.id)

