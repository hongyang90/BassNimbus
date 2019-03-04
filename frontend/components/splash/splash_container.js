import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    songs: Object.values(state.entities.songs),
    // users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);