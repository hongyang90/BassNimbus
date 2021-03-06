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
import DiscoverContainer from './discover/discover_container';
import MusicContainer from '../components/music/music_container';
import UploadSongContainer from '../components/songforms/upload_song_container';
import MusicPlayerContainer from '../components/music/music_player_container';
import SongShowContainer from '../components/song_page/song_show_container';

const App = () => (
    <>
        <Modal/>
        <Switch >
            <ProtectedRoute exact path='/discover' component={DiscoverContainer}/>
            <ProtectedRoute exact path='/songs/:songId' component={SongShowContainer} />
            <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
            <ProtectedRoute exact path='/upload' component={UploadSongContainer}/>
            <AuthRoute exact path='/' component={SplashContainer}/>
            <DefaultRoute path='/' component={SplashContainer}/>

        </Switch>
        {/* < MusicContainer /> */}
        <MusicPlayerContainer />
        
        {/* <ProtectedRoute exact path='/discover' component={HeaderContainer} /> */}
    </>
)

export default App;

