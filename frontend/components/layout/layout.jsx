import React from 'react';
import HeaderContainer from '../header/header_container';
import {withRouter} from 'react-router-dom';


const Layout = (props) => {

    return (
        <>
            <HeaderContainer />
            {props.children}
        </>

    )
};

export default withRouter(Layout);