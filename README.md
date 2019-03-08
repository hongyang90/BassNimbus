# BassNimbus

[BassNimbus-Live Site](https://bassnimbus.herokuapp.com)

BassNimbus is a clone of the popular music web application Soundcloud. Users of the site are able to browse songs and user pages while listening to music. Users are also able to upload, edit, and delete songs on their own profile. BassNimbus is a fullstack application that uses Ruby on Rails as a backend API, PostgreSQL & AWS S3 for databases, and React with Redux for the frontend architecture. Components such as modals and the music player were all built from scratch.

![alt text](https://s3-us-west-1.amazonaws.com/bassnimbus-seed/picture1.png)

## Technologies Used
* Ruby on Rails
* Javascript
* React/Redux
* Jbuilder
* PostgreSQL with AWS S3


## Highlighted Features

### Audio Playback/ Continuous Music Player

![alt-text](https://s3-us-west-1.amazonaws.com/bassnimbus-seed/picture2.png)

The main feature of the website is the ability for users to select songs to play and listen to while browsing different pages of the site. Users are also able to control the play state by playing/pausing any selected song or by using the persistent music player. In order to implement this feature, a music slice of state was created in order to keep track of the information for the music player. In addition, the play/pause buttons on all of the pages and the music player are able to change the redux state.

```music:
    sondId: 1
    songUrl: "songurlgoeshere"
    playState: true
 ```
 Music Actions that update the music slice of state
 
```
export const playSong = (song) => ({
    type: PLAYSONG,
    songUrl: song.soundUrl,
    songId: song.id
});

export const play = () => ({
    type: PLAY,
});

export const pauseSong = () => ({
    type: PAUSE,
});
```

### Individual User Pages with song CRUD

![alt-text](https://s3-us-west-1.amazonaws.com/bassnimbus-seed/picture3.png)




