import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {


    dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
        let user = this.props.currentUser;
        return (
            <div className='header'>
                <Link to='/discover' ><div className='headerlogo'></div></Link>
                <div className='fill'></div>
                <div className='username'><p>{user.username}</p></div>
                <div className='dropdown'>
                    <p onClick={this.dropdown} className='drp-btn'>gear</p>
                    <div id='myDropdown' className='dropdown-content'>
                        <p onClick={this.props.logout} >Logout</p>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Header;