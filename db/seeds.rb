# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all


user1 = User.create(username: "Hong", password: "hongyang90")
user1.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/me.jpg'), filename: 'me.jpg')


user3 = User.create(username: "Kevin", password: "kevin1")
user3.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/kevin.jpg'), filename: 'kevin.jpg')

user4 = User.create(username: "Vivian", password: "vivian1")
user4.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/vivian.jpg'), filename: 'vivian.jpg')

user5 = User.create(username: "Charles", password: "charles1")
user5.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/charles.jpg'), filename: 'charles.jpg')

user2 = User.create(username: "DemoUser", password: "password")
user2.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/demo.jpg'), filename: 'demo.jpg')


Song.destroy_all

song1 = Song.create(title: 'Beautiful Creatures', artist_id: user1.id)
song3 = Song.create(title: 'High on Life', artist_id: user1.id)
song4 = Song.create(title: 'Without You', artist_id: user1.id)
song11 = Song.create(title: 'Just For A Moment', artist_id: user3.id)
song19 = Song.create(title: 'Free Fall (Kompany Remix)', artist_id: user5.id)
song7 = Song.create(title: 'Higher Ground', artist_id: user2.id)
song9 = Song.create(title: 'Dreamer', artist_id: user3.id)
song12 = Song.create(title: 'First Time', artist_id: user4.id)
song5 = Song.create(title: 'Troubled', artist_id: user2.id)
song13 = Song.create(title: 'It Ain\'t Me', artist_id: user4.id)
song14 = Song.create(title: 'Smoke Filled Room', artist_id: user4.id)
song15 = Song.create(title: 'Everyday Everyday', artist_id: user4.id)
song8 = Song.create(title: 'Don\'t Let Me Down', artist_id: user2.id)
song17 = Song.create(title: 'Don\'t You Worry Child', artist_id: user5.id)
song6 = Song.create(title: 'Shelter', artist_id: user2.id)
song10 = Song.create(title: 'More Than You Know', artist_id: user3.id)
song16 = Song.create(title: 'Saving Light', artist_id: user5.id)
song2 = Song.create(title: 'Fractures', artist_id: user1.id)
song18 = Song.create(title: 'I Need You', artist_id: user3.id)
song20 = Song.create(title: 'Exterminate', artist_id: user5.id)


song1.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/illenium1.jpg'), filename: 'illenium1.jpg')
song2.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/illenium1.jpg'), filename: 'illenium1.jpg')
song3.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/highonlife.jpg'), filename: 'highonlife.jpg')
song4.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/withoutyou.jpeg'), filename: 'withoutyou.jpeg')
song5.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/troubled.jpeg'), filename: 'troubled.jpeg')
song6.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/shelter.jpg'), filename: 'shelter.jpg')
song7.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/higherground.jpg'), filename: 'higherground.jpg')
song8.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/dontletmedown.jpg'), filename: 'dontletmedown.jpg')
song9.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/axwell.png'), filename: 'axwell.png')
song10.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/axwell.png'), filename: 'axwell.png')
song11.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/justforamoment.jpeg'), filename: 'justforamoment.jpeg')
song12.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/firsttime.png'), filename: 'firsttime.png')
song13.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/itaintme.jpg'), filename: 'itaintme.jpg')
song14.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/smokedfilledroom.jpg'), filename: 'smokefilledroom.jpg')
song15.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/everyday.jpg'), filename: 'everyday.jpg')
song16.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/savinglight.jpg'), filename: 'savinglight.jpg')
song17.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/shm.jpg'), filename: 'shm.jpg')
song18.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/deltaheavy.jpg'), filename: 'deltaheavy.jpg')
song19.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/awake2.0.jpeg'), filename: 'awake2.0.jpeg')
song20.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/excision.jpg'), filename: 'excision.jpg')

song1.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/beautifulcreatures.m4a'), filename: 'beautifulcreatures.m4a')
song2.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/fractures.m4a'), filename: 'fractures.m4a')
song3.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/highonlife.mp3'), filename: 'highonlife.mp3')
song4.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/withoutyou.mp3'), filename: 'withoutyou.mp3')
song5.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/troubled.mp3'), filename: 'troubled.mp3')
song6.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/shelter.mp3'), filename: 'shelter.mp3')
song7.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/higherground.mp3'), filename: 'higherground.mp3')
song8.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/dontletmedown.mp3'), filename: 'dontletmedown.mp3')
song9.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/Dreamer.mp3'), filename: 'Dreamer.mp3')
song10.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/morethanyouknow.mp3'), filename: 'morethanyouknow.mp3')
song11.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/justforamoment.mp3'), filename: 'justforamoment.mp3')
song12.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/firsttime.mp3'), filename: 'firsttime.mp3')
song13.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/itaintme.mp3'), filename: 'itaintme.mp3')
song14.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/smokefilledroom.mp3'), filename: 'smokefilledroom.mp3')
song15.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/everydayeveryday.mp3'), filename: 'everydayeveryday.mp3')
song16.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/savinglight.mp3'), filename: 'savinglight.mp3')
song17.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/dontyouworry.mp3'), filename: 'dontyouworry.mp3')
song18.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/ineedyou.mp3'), filename: 'ineedyou.mp3')
song19.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/freefall.mp3'), filename: 'freefall.mp3')
song20.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/exterminate.mp3'), filename: 'exterminate.mp3')


Comment.destroy_all

c1 = Comment.create(body: 'This is sick!', song_id: song1.id, user_id: user1.id)
c2 = Comment.create(body: 'Great song', song_id: song2.id, user_id: user1.id)
c3 = Comment.create(body: 'wooo!', song_id: song7.id, user_id: user3.id)
c4 = Comment.create(body: 'niceee', song_id: song7.id, user_id: user4.id)
c5 = Comment.create(body: 'my fave', song_id: song17.id, user_id: user1.id)
c6 = Comment.create(body: 'sweeet', song_id: song17.id, user_id: user5.id)
c7 = Comment.create(body: 'porterrr!', song_id: song6.id, user_id: user4.id)
c8 = Comment.create(body: 'amazing', song_id: song6.id, user_id: user3.id)
c9 = Comment.create(body: 'i love it', song_id: song6.id, user_id: user2.id)
c10 = Comment.create(body: 'coool', song_id: song3.id, user_id: user5.id)
c11 = Comment.create(body: 'wow', song_id: song4.id, user_id: user4.id)
c12 = Comment.create(body: 'best song ever', song_id: song6.id, user_id: user4.id)
c13 = Comment.create(body: 'ayyyyy', song_id: song6.id, user_id: user3.id)
c14 = Comment.create(body: 'such a great song', song_id: song9.id, user_id: user1.id)
c15 = Comment.create(body: 'coool', song_id: song9.id, user_id: user2.id)
c16 = Comment.create(body: 'coool', song_id: song10.id, user_id: user2.id)
c17 = Comment.create(body: 'when did this come out?', song_id: song11.id, user_id: user2.id)
c18 = Comment.create(body: 'love love love', song_id: song10.id, user_id: user3.id)