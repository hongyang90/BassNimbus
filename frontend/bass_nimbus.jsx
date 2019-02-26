import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';
import Root from './components/root';

// testing
import * as sessionapi from './util/session_api_util';
window.login = sessionapi.createSession;
window.signout = sessionapi.destroySession;
// testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root );
})