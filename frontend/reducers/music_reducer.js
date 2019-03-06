import {PAUSE, PLAY} from '../actions/music_actions';
import {RECEIVE_ALL_SONGS} from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const initialState = {play: false, songUrl: '', tracklist: [] };

const musicReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case PLAY:
            return Object.assign({}, oldState, {songUrl: action.song.soundUrl }, {play: true});
        case PAUSE:
            return Object.assign({}, oldState, { play: false });
        case RECEIVE_ALL_SONGS:
            return Object.assign({}, oldState, {tracklist: Object.values(action.songs)});
        // case RECEIVE_USER:
        //     return Object.assign({}, oldState, { tracklist: Object.values(action.payload.songs) })
        default:
            return oldState;
    }

};

export default musicReducer;