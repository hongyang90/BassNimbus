import { connect } from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';


const msp = (state, ownProps) => {
    return {
    user: state.entities.users[ownProps.match.params.userId],
    songs: Object.values(state.entities.songs).filter(song => song.artistId == ownProps.match.params.userId),
    errors: state.errors.user
};};

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(UserShow);