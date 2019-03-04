import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import { fetchSongs } from '../../util/song_api_util';

const mapStateToProps = state => ({
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);