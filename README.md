# BassNimbus

[BassNimbus-Live Site](https://bassnimbus.herokuapp.com)

BassNimbus is a clone of the popular music web application Soundcloud. Users of the site are able to browse songs and user pages while listening to music. Users are also able to upload, edit, and delete songs on their own profile. BassNimbus is a fullstack application that uses Ruby on Rails as a backend API, PostgreSQL & AWS S3 for databases, and React with Redux for the frontend architecture. Components such as modals and the music player were all built from scratch.

![picture1](https://user-images.githubusercontent.com/44389539/54500092-48050300-48d6-11e9-8313-9e9d9095dc9b.png)

## Technologies Used
* Ruby on Rails
* Javascript
* React/Redux
* Jbuilder
* PostgreSQL with AWS S3


## Highlighted Features

### Audio Playback/ Continuous Music Player

![picture2](https://user-images.githubusercontent.com/44389539/54500103-71be2a00-48d6-11e9-9cf3-2fff8ddf3cfe.png)

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

![picture3](https://user-images.githubusercontent.com/44389539/54500104-71be2a00-48d6-11e9-8f98-1caece84937c.png)

BassNimbus allows users to sign up and have their own personalized user page. The user page shows all songs uploaded by the user and allows the user to edit and delete only their own songs. The edit and delete forms are displayed as modals on the current user show page and will cause a re-render of the page once an action has been dispatched. An example of the edit form is shown below.

![picture4](https://user-images.githubusercontent.com/44389539/54500105-71be2a00-48d6-11e9-8a57-c72549fd56b1.png)





