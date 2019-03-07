import { connect } from 'react-redux';
import { play, playSong, pauseSong } from '../../actions/music_actions';
import Button from './button';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState
});

const mdp = dispatch => ({
    playSong: (songUrl) => dispatch(playSong(songUrl)),
    pauseSong: () => dispatch(pauseSong()),
    play: () => dispatch(play())
});

export default connect(msp, mdp)(Button);