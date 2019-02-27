import {connect} from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import React from 'react';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    action: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp,mdp)(sessionForm);
