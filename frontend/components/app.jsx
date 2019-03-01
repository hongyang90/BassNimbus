import React from 'react';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal_container';
// import SplashNav from './splashnav/splash_nav_container';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import HeaderContainer from './header/header_container';
import Discover from './discover/discover';
import UserShow from './user/user_show';



const App = () => (
    <>
        <Modal/>
        <AuthRoute path='/' component={SplashContainer}/>
        <Route path='/discover' component={HeaderContainer} />
        <Route path='/discover' component={Discover}/>
        <Route path='/users/:userId' component={UserShow}/>
    </>
)

export default App;