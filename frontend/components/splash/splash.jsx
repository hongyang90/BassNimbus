import React from 'react';
import SplashNav from './splash_nav_container';

class Splash extends React.Component {

    render() {
        return (
            <div className='splash'>
                < SplashNav />
                <div className='splashsub' >
                    <div className='splash-banner'>
                        <h1>What's next in EDM music is first on BassNimbus</h1>
                        <h2>Upload your first track and begin your journey.</h2>
                        <h3></h3>
                        <button onClick={() => this.props.openModal('signup')}>Start uploading today</button>
                    </div>
                    <div className='splash-mid' >

                    </div>
                </div>
            </div>
        )
    }
};

export default Splash;