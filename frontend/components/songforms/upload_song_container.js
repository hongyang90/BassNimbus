import {createSong} from '../../actions/song_actions';
import UploadSong from './upload_song';
import { connect } from 'react-redux';

const msp = state => ({
    currentUser: state.session.id
});

const mdp = dispatch => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(msp, mdp)(UploadSong);