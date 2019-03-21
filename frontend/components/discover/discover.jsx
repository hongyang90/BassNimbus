import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import SongIndexItem from '../song_index_item/song_index_item';


class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
        this.props.fetchUsers();
    }

    render() {
        let songs = this.props.songs;
        let users = Object.values(this.props.users);

        if (users === undefined) {
            return (<div></div> )
        } else {
            users = users.slice(0,4).map(user => {
                return (
                    <div className='userslist' key={user.id}> 
                        <Link to={`/users/${user.id}`}><img src={user.photoUrl} alt="" /></Link>
                        <Link to={`/users/${user.id}`}><div>{user.username}</div></Link>
                    </div>
                )
            
        })}
    


        if (songs === undefined && users === undefined) {
            return (
                <div></div>
            )
        } else {
                 songs = this.props.songs.map(song => {
                    return (
                        <div key={song.id}>
                            <SongIndexItem key={song.id} song={song} users={this.props.users} />
        
                        </div>
                    )
                });
                let songs1;
                let songs2;
                let songs3;
                let songs4;
                if (songs === undefined) {
                    songs1 = "";
                    songs2 = '';
                    songs3 = '';
                    songs4 = '';
                }
        
                else {
                    songs1 = songs.slice(0,4);
                    songs2 = songs.slice(4,8);
                    songs3 = songs.slice(8,12);
                    songs4 = songs.slice(12,16);
                }
        
                return (
                    <Layout >
                        <div className='discover'>
                            <div className='discover-content'>
        
                                <div className='leftside'>
                                    <div className='genre'>
                                        <div className='genre-title'> 
                                            <span>Featured</span>
                                            <span className='description'>Hear what's new, now, and next in music</span>
                                        </div>
                                        <div className='genre-songs'>
                                            {songs1}
                                        </div>
                                    </div>
        
                                    <div className='genre'>
                                        <div className='genre-title'>
                                            <span>Fresh Pressed</span>
                                            <span className='description'>New releases this week</span>
                                        </div>
                                        <div className='genre-songs'>
                                            {songs2}
                                        </div>
                                    </div>
        
                                    <div className='genre'>
                                        <div className='genre-title'>
                                            <span>Hot and Trending</span>
                                            <span className='description'>What's popular among the BassNimbus community</span>
                                        </div>
                                        <div className='genre-songs'>
                                            {songs3}
                                        </div>
                                    </div>
        
                                    <div className='genre'>
                                        <div className='genre-title'>
                                            <span>Biggest Hits</span>
                                            <span className='description'>Time tested classics</span>
                                        </div>
                                        <div className='genre-songs'>
                                            {songs4}
                                        </div>
                                    </div>
        
                                </div>
                                
                                <div className='rightside'>
                                    <div className='whotofollow'>
                                        <div className='followtext'>Who to follow</div>
                                        <div className='follows'>
                                            {users}
                                        </div>
                                    </div>
                                    <a className='linkedin' href="https://www.linkedin.com/in/hongyang-gao-11525b66/"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/hongyang90/BassNimbus"><i className="fab fa-github"></i></a>
                                </div>
        
        
        
                            </div>
                        </div>
                    </Layout>
                )
            
        }

    }
}

export default Discover;