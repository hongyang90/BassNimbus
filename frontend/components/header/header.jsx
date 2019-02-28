import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {


    render() {
        let user = this.props.currentUser;
        return (
            <div className='header'>
                <Link to='/discover' ><div className='headerlogo'></div></Link>
                <div className='fill'>fill</div>
                <div className='username'><p>{user.username}</p></div>
                <div className='dropdown'>
                    <p className='drp-btn'>gear</p>
                    <div className='dropdown-content'>
                        <button onClick={this.props.logout} >Logout</button>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Header;