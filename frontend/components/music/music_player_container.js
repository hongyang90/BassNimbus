import { connect } from 'react-redux';
import MusicPlayer from './musicplayer';
import { play, pauseSong, playSong } from '../../actions/music_actions';

const msp = state => ({
    songUrl: state.music.songUrl,
    playState: state.music.playState,
    currentSong: state.entities.songs[state.music.songId],

    tracklist: state.music.tracklist
});

const mdp = dispatch => ({
    play: () => dispatch(play()),
    pauseSong: () => dispatch(pauseSong()),
    playSong: (songUrl) => dispatch(playSong(songUrl)),

});

export default connect(msp, mdp)(MusicPlayer);