import { connect } from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';
import {deleteSong, updateSong} from '../../actions/song_actions';
import {openModal} from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    return {
    user: state.entities.users[ownProps.match.params.userId],
    songs: Object.values(state.entities.songs).filter(song => song.artistId == ownProps.match.params.userId),
    errors: state.errors.user,
    currentUser: state.session.id
};};

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    deleteSong: id => dispatch(deleteSong(id)),
    updateSong: song => dispatch(updateSong(song)),
    openModal: (type, song) => dispatch(openModal(type, song))

});

export default connect(msp, mdp)(UserShow);