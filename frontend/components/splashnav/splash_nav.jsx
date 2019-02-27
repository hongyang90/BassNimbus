import React from 'react';

const SplashNav = ({ currentUser, logout, openModal }) => {
    return (
        <button onClick={() => openModal('login')}>Login</button>
    )
};

export default SplashNav;