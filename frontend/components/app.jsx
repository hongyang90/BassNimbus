import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal_container';
import SplashNav from './splashnav/splash_nav_container';

const App = () => (
    <div>
        <Modal/>
        <SplashNav />
       
            
     

        {/* <LoginFormContainer />
        <SignupFormContainer /> */}
     
    </div>
)

export default App;