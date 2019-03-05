import {createSong} from '../../actions/song_actions';
import UploadSong from './upload_song';
import { connect } from 'react-redux';

const mdp = dispatch => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(null, mdp)(UploadSong);