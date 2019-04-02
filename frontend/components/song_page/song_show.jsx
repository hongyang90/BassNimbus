import React from 'react';
import Layout from '../layout/layout';
import ButtonContainer from '../music/button_container';

class SongShow extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {body: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.songId;
        this.props.fetchUsers().then(() => this.props.fetchSong(id))
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.songId !== this.props.match.params.songId) {
            this.props.fetchSong(this.props.match.params.songId);
            // this.props.fetchUsers();
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let id = this.props.match.params.songId;
        this.props.createComment(this.state, id ).then(() => this.setState({body: ''}));
    }

    updateInput() {
        return e => this.setState({body: e.currentTarget.value});
    }

    render() {
        let song = this.props.song;
        // let comments = this.props.comments;
     
        if (song === undefined ) {
            return(
                <div></div>
                )
            } 
        else {
            let artist = this.props.users[this.props.song.artistId];
                console.log(song.artistId)  
                console.log(this.props.users)
                console.log('artist')
            let currentUser = this.props.users[this.props.currentUserId];
                console.log(this.props.currentUserId)
                
            return(
              <Layout >
                  <div className='songshow'>
                    <div className='songbanner'>
                        <div className='songbannerleft'>
                            <ButtonContainer song={song}/>
                            <div className='songinfo'>
                                <div className='artistname'>{artist.username}</div>
                                <div className='songtitle'>{song.title}</div>
                            </div>
                        </div>
                        <div className='songbannerright'>
                                <div ><img className='songimg' src={song.photoUrl}/></div>
                        </div>
                    </div>
                    <div className='songshowcontent'>
                        <div className='songshowcontentsub'>
                            <div className='commentinput'>
                                <form onSubmit={this.handleSubmit} >
                                    <img src={currentUser.photoUrl} alt=""/>
                                    <input type="text" placeholder='Write a Comment' onChange={this.updateInput()} value={this.state.body}/>
                                </form>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div className='commentlist'>

                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </Layout>
            )
            
        }
    }
}

export default SongShow;