import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        let song = this.props.song;
        let users = this.props.users;
        // let username = users[song.artist_id].username;
        return (
            <div className='splashsongindex'>
                <div className='image'><img src={song.photoUrl}/></div>
                <div className='songname'>{song.title}</div>
                {/* <div className='artistname'>{username}</div> */}
                {/* <audio ref="audio_tag" src={song.soundUrl} controls autoPlay /> */}

            </div>
        );
    }
}

export default SongIndexItem;