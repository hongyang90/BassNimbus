import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        window.addEventListener('click', (e) => {
            const btn = document.getElementById("myDropdown");
            if (!e.target.matches('.dropdown')) {
                if (btn.classList.contains('show')) {
                    btn.classList.remove('show');
                }
            }
        });
    }

    dropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
        let user = this.props.currentUser;
        return (
            <div className='header'>
                <Link to='/discover' ><div className='headerlogo'></div></Link>
                <div className='fill'></div>
                <div className='headerupload'>Upload</div>
                <div className='username'><p>{user.username}</p></div>
                <div className='dropdown' onClick={this.dropdown} >
                    <p className='drp-btn'><i className="fas fa-ellipsis-h"></i></p>
                    <div  id='myDropdown' className='dropdown-content'>
                        <p onClick={this.props.logout}>Sign Out</p>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Header;