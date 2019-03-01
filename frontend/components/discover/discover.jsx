import React from 'react';
import { Link } from 'react-router-dom';

class Discover extends React.Component {

    componentDidMount() {
        // fetch all songs
    }

    render() {

        return (
            <div className='discover'>
                <div className='discover-content'>
                    <div className='genre'>
                        <div className='genre-title'> 
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discover;