import {RECEIEVE_SONG,RECEIVE_ALL_SONGS,REMOVE_SONG} from '../actions/song_actions';

const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIEVE_SONG:
            return Object.assign(newState, {[action.song.id]: action.song})
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case REMOVE_SONG:
            delete newState[action.songId];
            return newState;
        default:
            return oldState;
    }
};