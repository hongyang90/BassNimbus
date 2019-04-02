import React from 'react';
import Layout from '../layout/layout';
import ButtonContainer from '../music/button_container';
import {Link} from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

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
            let currentUser = this.props.users[this.props.currentUserId];
            let comments = this.props.comments.reverse();

            let mapped = comments.map(el => {
                return (
                    <div className='parentcomment' key={el.id}>
                        <CommentIndexItem currentUserId={this.props.currentUserId}  comment={el} users={this.props.users} deleteComment={this.props.deleteComment}/>

                    </div>
                )
            })

            return(
              <Layout >
                  <div className='songshow'>
                    <div className='songbanner'>
                        <div className='songbannerleft'>
                            <ButtonContainer song={song}/>
                            <div className='songinfo'>
                                <Link to={`/users/${artist.id}`}><div className='artistname'>{artist.username}</div></Link>
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
                                <div className='inputwrapper'>
                                    <form className='commentform' onSubmit={this.handleSubmit} >
                                        <img className='commentphoto' src={currentUser.photoUrl} alt=""/>
                                        <input type="text" maxLength='75' placeholder='Write a Comment' onChange={this.updateInput()} value={this.state.body}/>
                                    </form>
                                </div>
                            </div>
                            <div className='songcontentinfo'>
                                <div className='artistinfo'>
                                    <Link to={`/users/${artist.id}`}><img src={artist.photoUrl} /></Link>
                                    <Link to={`/users/${artist.id}`}><div>{artist.username}</div></Link>
                                </div>
                                <div className='commentlist'>
                                        <div className='commentcount'><i className="fas fa-comment"></i>  {comments.length} Comments</div>
                                    <div className='commentindexitems'>
                                        {mapped}
                                    </div>
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