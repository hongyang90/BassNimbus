import React from 'react';

class Header extends React.Component {


    render() {
        let user = this.props.currentUser;
        return (
            <div className='header'>
                <div className='headerlogo'></div>
                <div className='fill'>fill</div>
                <div className='username'><p>{user.username}</p></div>
                <div></div>
                
            </div>
        );
    };
};

export default Header;