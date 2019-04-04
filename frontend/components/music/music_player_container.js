import { connect } from 'react-redux';
import MusicPlayer from './musicplayer';
import Test from './test';
import { play, pauseSong } from '../../actions/music_actions';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState,
    currentSong: state.entities.songs[state.music.songId]

    // tracklist: state.music.tracklist
});

const mdp = dispatch => ({
    play: () => dispatch(play()),
    pauseSong: () => dispatch(pauseSong())
});

export default connect(msp, mdp)(Test);