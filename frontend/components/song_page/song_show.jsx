import React from 'react';
import Layout from '../layout/layout';
import ButtonContainer from '../music/button_container';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params.songId;
        this.props.fetchSong(id);
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.songId !== this.props.match.params.songId) {
            this.props.fetchSong(this.props.match.params.songId);
            
        }
    }

    render() {
        let song = this.props.song;
        if (song === undefined) {
            return(
                <div></div>
                )
            } 
        else {
                let artist = this.props.users[this.props.song.artistId];
                console.log(song)  
                console.log(this.props.users)
                console.log(artist)
            return(
              <Layout >
                  <div className='songshow'>
                    <div className='songbanner'>
                        <div className='songbannerleft'>
                            <ButtonContainer song={song}/>
                            <div className='songinfo'>
                                <div className='artistname'>artistname</div>
                                <div className='songtitle'>{song.title}</div>
                            </div>
                        </div>
                        <div className='songbannerright'>
                                <div ><img className='songimg' src={song.photoUrl}/></div>
                        </div>
                    </div>
                    <div className='songshowcontent'>
    
                    </div>
                  </div>
              </Layout>
            )
            
        }
    }
}

export default SongShow;