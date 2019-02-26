import React from 'react';
import ReactDOM from 'react-dom';

// testing
import * as sessionapi from './util/session_api_util';
window.login = sessionapi.createSession;
window.signout = sessionapi.destroySession;
// testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    ReactDOM.render(<h1>React</h1>, root )
})