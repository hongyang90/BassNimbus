import React from 'react';

const SplashNav = ({ currentUser, logout, openModal }) => {
    return (
        <div className='splash-nav'>
            <div className='splashnavleft'>
                <div className='logo'></div>
                <h3>BassNimbus</h3>
            </div>
            <div className='splashnavright'> 
                <button onClick={() => openModal('login')}>Sign in</button>
                <button onClick={() => openModal('signup')}>Create account</button>
            </div>
        </div>
    )
};

export default SplashNav;