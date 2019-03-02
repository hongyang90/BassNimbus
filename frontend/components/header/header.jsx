import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        window.addEventListener('click', (e) => {
            const btn = document.getElementById("myDropdown");
            if (!e.target.matches('.dropdown') && !e.target.matches('.fa-ellipsis-h')) {
                if (btn){
                    if (btn.classList.contains('show')) {
                        btn.classList.remove('show');
                    }

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
                <Link to='/discover'><div className='header-home'>Home</div></Link>
                <div className='fill'></div>
                {/* <div className='header-pic'>{user.photoUrl}</div> */}
                <div className='headerupload'>Upload</div>
                <Link to={`/users/${user.id}`}><div ><img className='header-pic' src={user.photoUrl} alt="" /></div></Link>
                <Link to={`/users/${user.id}`} ><div className='username'><p>{user.username}</p></div></Link>
                <div className='dropdown' onClick={this.dropdown} >
                    <div className='drp-btn' ><p className="fas fa-ellipsis-h"></p></div>
                    <div  id='myDropdown' className='dropdown-content'>
                        <p onClick={this.props.logout}>Sign Out</p>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Header;