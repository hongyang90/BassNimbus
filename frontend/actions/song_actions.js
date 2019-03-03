import * as SongAPI from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIEVE_SONG = 'RECEIEVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
});

const receiveSong = song => ({
    type: RECEIEVE_SONG,
    song
});

const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
});

export const fetchSongs = () => dispatch => (
    SongAPI.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);

export const fetchPost = id => dispatch => (
    PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createSong = song => dispatch => (
    SongAPI.createSong(song).then(song => dispatch(receiveSong(song)))
);

export const updateSong = song => dispatch => (
    SongAPI.updateSong(song)
        .then(song => dispatch(receiveSong(song)))
);

export const deleteSong = songId => dispatch => (
    SongAPI.deleteSong(songId).then(songId => dispatch(removeSong(songId)))
);
