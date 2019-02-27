import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Login'
});

const mdp = dispatch => ({
    action: user => dispatch(login(user)),
});

export default connect(msp, mdp)(sessionForm);