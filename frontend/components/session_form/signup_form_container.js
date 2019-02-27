import {connect} from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    action: user => dispatch(signup(user)),
});

export default connect(msp,mdp)(sessionForm);
