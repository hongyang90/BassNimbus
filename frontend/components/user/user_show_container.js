import { connect } from 'react-redux';
import UserShow from './user_show';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(UserShow);