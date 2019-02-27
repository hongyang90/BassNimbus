import React from 'react';
import { Route } from 'react-router-dom';
import Signupcontainer from '../components/session_form/signup_form_container';
import Login from '../components/session_form/login_form_container';


const App = () => (
    <div>
        <h1>BassNimbus</h1>

        <Login />
        <Signupcontainer />
     
    </div>
)

export default App;