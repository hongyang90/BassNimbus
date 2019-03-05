import { connect } from 'react-redux';
import { closeModal} from '../../actions/modal_actions';
import {updateSong} from '../../actions/song_actions';
import EditSongForm from './edit_song_form';



const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateSong: song => dispatch(updateSong(song))
});

export default connect(null, mdp)(EditSongForm);