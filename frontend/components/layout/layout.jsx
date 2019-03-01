import React from 'react';
import HeaderContainer from '../header/header_container';


const Layout = (props) => {

    return (
        <div>
            <HeaderContainer />
            {props.children}
        </div>

    )
};

export default Layout;