import React from 'react';
import Layout from '../layout/layout';
import SongIndexItem from '../song_index_item/song_index_item';

class UserShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params.userId;
        this.props.fetchUser(id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }


    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} >
                        {error}
                    </div>
                ))}
            </>
        );
    }

    render() {
        // this user should be the fetched user not current user
        const user = this.props.user;
        
        if (this.props.errors.length !== 0) {
            return (
               <div>404 Page not found</div>
            )
        }


        if (user === undefined) {
            return (
                <div></div>
            )
        } else {

            let songs = this.props.songs.map(el => {
                return (
                    <div className='song-itemdiv' >
                        <SongIndexItem key={el.id} song={el} users={this.props.users} />
                        <div className='songitemdivright'>
                            <div className='name'>
                                <div className='title'>{el.title}</div>
                                <div className='username'>{user.username}</div>

                            </div>
                            <div className='waveform'></div>
                        </div>
                        <div className='actions'>
                            <div><i class="fas fa-edit"></i></div>
                            <br/>
                            <div><i class="fas fa-trash-alt"></i></div>
                        </div>
                        {/* <img key={el.id} src={el.photoUrl} /> */}
                        {/* <audio ref="audio_tag" src={el.soundUrl} controls autoPlay /> */}
                    </div>
                )
            });


            return (
                <Layout >
                    <div className='show'>
                        <div className='show-banner'>
                            <div className='profile-pic'>
                            {/* this needs to be the actual user pic not current user */}
                                <img className='user-img' src={user.photoUrl} alt=""/> 
                              
                            </div>
                            <div className='display-name'>
                                <h2>{user.username}</h2>
                            </div>
                        </div>
                        <div className='show-content'>
                            <div className='labels'>
                                <span>Tracks</span>
                            </div>
                            <div className='userssongs'>
                                {songs}
                            </div>
                        </div>
                    </div>
                </Layout>
            )
            
        }
    }
};

export default UserShow;