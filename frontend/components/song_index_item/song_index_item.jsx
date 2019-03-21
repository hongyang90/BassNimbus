import React from 'react';
import { Link } from 'react-router-dom';
import ButtonContainer from '../music/button_container';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    showLink() {
        let song = this.props.song;
        let users = this.props.users;
        if (users === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <Link className='songindexlink' to={`/users/${song.artistId}`}><div className='artistname'>{users[song.artistId].username}</div></Link>

            )
        }
    }

    render() {
        let song = this.props.song;
        
        // // let username = users[song.artist_id].username;
        // if (song === undefined) {
        //     return (<div></div> )
        // } else {

            return (
                <div className='splashsongindex'>
                    <Link to={`/songs/${song.id}`} ><div className='image'><img src={song.photoUrl} /></div></Link>   
                    <ButtonContainer song={song} />
                    <Link to={`/songs/${song.id}`}><div className='songname'>{song.title}</div></Link>
                    {this.showLink()}
                    {/* <Link to={`/users/${song.artistId}`}><div className='artistname'>{users[song.artistId].username}</div></Link> */}
                    {/* <audio ref="audio_tag" src={song.soundUrl} controls/> */}

                </div>
            );
        // }
    }
}

export default SongIndexItem;