import { connect } from 'react-redux';
import Music from './music';
import {play, pauseSong} from '../../actions/music_actions';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState,
    currentSong: state.entities.songs[state.music.songId]
    // songs: Object.values(state.entities.songs)
    // tracklist: state.music.tracklist
});

const mdp = dispatch => ({
    play: () => dispatch(play()),
    pauseSong: () => dispatch(pauseSong())
});

export default connect(msp, mdp)(Music);
