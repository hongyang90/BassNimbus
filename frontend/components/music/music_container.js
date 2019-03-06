import { connect } from 'react-redux';
import Music from './music';
import {playSong, pauseSong} from '../../actions/music_actions';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState
    // tracklist: state.music.tracklist
});

const mdp = dispatch => ({
    playSong: (songUrl) => dispatch(playSong(songUrl)),
    pauseSong: () => dispatch(pauseSong())
});

export default connect(msp, mdp)(Music);
