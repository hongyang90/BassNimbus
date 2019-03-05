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
        let users = this.props.users;

        if (songs === undefined && users === undefined) {
            return (
                <div></div>
            )
        } else {
                 songs = this.props.songs.map(song => {
                    return (
                        <>
                            <SongIndexItem key={song.id} song={song} users={this.props.users} />
                            {/* <div className='songname'>{el.title}</div> */}
        
                        </>
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
                                            <span className='description'>Classic songs that have withstood time</span>
                                        </div>
                                        <div className='genre-songs'>
                                            {songs4}
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

export default Discover;