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

user2 = User.create(username: "DemoUser", password: "password")
user2.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/demo.jpg'), filename: 'demo.jpg')

user3 = User.create(username: "Kevin", password: "kevin1")
user3.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/kevin.jpg'), filename: 'kevin.jpg')

user4 = User.create(username: "Vivian", password: "vivian1")
user4.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/vivian.jpg'), filename: 'vivian.jpg')

user5 = User.create(username: "Charles", password: "charles1")
user5.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/charles.jpg'), filename: 'charles.jpg')

 
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
song13 = Song.create(title: 'It Ain\'t Me', artist_id: user4.id)
song14 = Song.create(title: 'Smoke Filled Room', artist_id: user4.id)
song15 = Song.create(title: 'Everyday Everyday', artist_id: user4.id)
song16 = Song.create(title: 'Saving Light', artist_id: user4.id)
song17 = Song.create(title: 'Don\'t You Worry Child', artist_id: user4.id)
song18 = Song.create(title: 'I Need You', artist_id: user4.id)
song19 = Song.create(title: 'Free Fall (Kompany Remix)', artist_id: user4.id)
song20 = Song.create(title: 'Exterminate', artist_id: user4.id)

song1.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/illenium1.jpg'), filename: 'illenium1.jpg')
song2.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/illenium1.jpg'), filename: 'illenium1.jpg')
song3.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/highonlife.jpg'), filename: 'highonlife.jpg')
song4.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/withoutyou.jpeg'), filename: 'withoutyou.jpeg')
song5.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/troubled.jpeg'), filename: 'troubled.jpeg')
song6.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/shelter.jpg'), filename: 'shelter.jpg')
song7.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/7.jpg'), filename: '7.jpg')
song8.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/8.jpg'), filename: '8.jpg')
song9.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/9.png'), filename: '9.png')
song10.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/9.png'), filename: '9.png')
song11.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/11.jpeg'), filename: '11.jpeg')
song12.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/12.png'), filename: '12.png')
song13.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/13.jpg'), filename: '13.jpg')
song14.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/14.jpg'), filename: '14.jpg')
song15.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/15.jpg'), filename: '15.jpg')
song16.photo.attach(io: open('/Users/KanyeMain/Desktop/BassNimbusArt/16.jpg'), filename: '16.jpg')

song1.sound.attach(io: open('https://s3-us-west-1.amazonaws.com/bassnimbus-seed/beautifulcreatures.m4a'), filename: 'beautifulcreatures.m4a')


