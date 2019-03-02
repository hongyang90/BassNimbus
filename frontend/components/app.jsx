import React from 'react';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal_container';
// import SplashNav from './splashnav/splash_nav_container';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import {ProtectedRoute, AuthRoute, DefaultRoute} from '../util/route_util';
import HeaderContainer from './header/header_container';
import Discover from './discover/discover';
import UserShowContainer from './user/user_show_container';



const App = () => (
    <>
        <Modal/>
        <Switch >
            <ProtectedRoute exact path='/discover' component={Discover}/>
            <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
            <AuthRoute exact path='/' component={SplashContainer}/>
            <DefaultRoute path='/' component={SplashContainer}/>

        </Switch>
        
        {/* <ProtectedRoute exact path='/discover' component={HeaderContainer} /> */}
    </>
)

export default App;

