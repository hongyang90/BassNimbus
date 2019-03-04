import React from 'react';
import SplashNav from './splash_nav_container';
import SongIndexItem from '../song_index_item/song_index_item';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        let songs = this.props.songs.map(el => {
            return (
                <>
                    <SongIndexItem key={el.id} song={el} users={this.props.users} />
                    {/* <img key={el.id} src={el.photoUrl} /> */}
                    {/* <audio ref="audio_tag" src={el.soundUrl} controls autoPlay /> */}
                </>
            )
        });

    
        return (
            <div className='splash'>
                < SplashNav />
                <div className='splashsub' >
                    <div className='splash-banner'>
                        <h1>What's next in EDM music is first on BassNimbus</h1>
                        <h2>Upload your first track and begin your journey.</h2>
                        <h3></h3>
                        <button onClick={() => this.props.openModal('signup')}>Start uploading today</button>
                    </div>
                    <div className='splash-mid' >
                        <div className='info'>
                            <input type="text" placeholder='Search for artists, bands, tracks, podcasts'/>
                            <h2>or</h2>
                            <button onClick={() => this.props.openModal('signup')}>Upload your own</button>
                        </div>
                        <p>Hear what's trending for free in the BassNimbus community</p>
                        <div className='splash-songs'>
                            {songs}
                        </div>
                        <button onClick={() => this.props.openModal('signup')}>Explore Trending Playlists</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Splash;