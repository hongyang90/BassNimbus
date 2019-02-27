import React from 'react';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal_container';
// import SplashNav from './splashnav/splash_nav_container';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
    <>
        <Modal/>
        <Route path='/' component={SplashContainer}/>
       
     
    </>
)

export default App;