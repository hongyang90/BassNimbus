import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteSong} from '../../actions/song_actions';
import DeleteSongForm from './delete_song_form';



const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteSong: id => dispatch(deleteSong(id))
});

export default connect(null, mdp)(DeleteSongForm);