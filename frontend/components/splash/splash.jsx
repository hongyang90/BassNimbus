import React from 'react';
import SplashNav from './splash_nav_container';

class Splash extends React.Component {

    render() {
        return (
            <div className='splash'>
                < SplashNav />
                <div className='splash-banner'>
                    <h1>What's next in EDM music is first on BassNimbus</h1>
                    <h2>Upload your first track and begin your journey. BassNimbus gives you space to create, find your fans, and connect with other artists.</h2>
                    <button onClick={() => this.props.openModal('signup')}>Start uploading today</button>
                    
                </div>
            </div>
        )
    }
};

export default Splash;