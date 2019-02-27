import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';
import React from 'react';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Login'
});

const mdp = dispatch => ({
    action: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(sessionForm);