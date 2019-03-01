import React from 'react';
import HeaderContainer from '../header/header_container';


const Layout = (props) => {

    return (
        <>
            <HeaderContainer />
            {props.children}
        </>

    )
};

export default Layout;