import {RECEIVE_SONG,RECEIVE_ALL_SONGS,REMOVE_SONG} from '../actions/song_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign(newState, {[action.song.id]: action.song});
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case REMOVE_SONG:
            delete newState[action.songId.id];
            return newState;
        case RECEIVE_USER:
            return Object.assign(newState, action.payload.songs);
        default:
            return oldState;
    }
};

export default SongsReducer;