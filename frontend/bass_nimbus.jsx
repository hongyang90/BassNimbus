import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';
import Root from './components/root';

// testing
import * as session_actions from './actions/session_actions';
import * as util from './util/session_api_util';
import * as songActions from './actions/song_actions';
import * as songapi from './util/song_api_util';
import {fetchUser} from './actions/user_actions';


window.fetchUser = fetchUser;
window.createSong = songActions.createSong;
// window.getsongs = songActions.fetchSongs;
window.getsongs = songapi.fetchSongs;
window.getsong = songActions.fetchSong;

// window.login = session_actions.login;
// window.logout = session_actions.logout;
// window.signup = session_actions.signup;
// testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // let store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<Root store={store}/>, root );
})