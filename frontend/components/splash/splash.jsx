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
                
                    <img key={el.id} src={el.photoUrl} />
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
                        <div className='splash-songs'>
                            {songs}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Splash;