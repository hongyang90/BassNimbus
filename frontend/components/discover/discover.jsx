import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import SongIndexItem from '../song_index_item/song_index_item';


class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {

        let songs = this.props.songs.map(el => {
            return (
                <>
                    <SongIndexItem key={el.id} song={el} users={this.props.users} />
                </>
            )
        });
        let songs1;
        let songs2;
        if (songs === undefined) {
            songs1 = "";
            songs2 = '';
        }

        else {
            songs1 = songs.slice(0,4);
            songs2 = songs.slice(4,8);
        }
        console.log(songs1)

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
                                    <span>What's New</span>
                                    <span className='description'>New releases this week</span>
                                </div>
                                <div className='genre-songs'>
                                    {songs2}
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </Layout>
        )
    }
}

export default Discover;