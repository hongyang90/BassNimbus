import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';


class Discover extends React.Component {

    componentDidMount() {
        // fetch all songs
    }

    render() {

        return (
            <Layout >
                <div className='discover'>
                    <div className='discover-content'>
                        <div className='genre'>
                            <div className='genre-title'> 
                                <span>Featured</span>
                            </div>
                            <div className='genre-songs'>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Discover;