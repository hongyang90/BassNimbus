import { connect } from 'react-redux';
import MusicPlayer from './musicplayer';
import { play, pauseSong } from '../../actions/music_actions';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState
    // tracklist: state.music.tracklist
});

const mdp = dispatch => ({
    play: () => dispatch(play()),
    pauseSong: () => dispatch(pauseSong())
});

export default connect(msp, mdp)(MusicPlayer);