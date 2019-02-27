import React from 'react';

const SplashNav = ({ currentUser, logout, openModal }) => {
    return (
        <div className='splash-nav'>
            <h1>BassNimbus</h1>
            <button onClick={() => openModal('login')}>Sign in</button>
            <button onClick={() => openModal('signup')}>Create account</button>
        </div>
    )
};

export default SplashNav;