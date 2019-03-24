import {connect} from 'react-redux';
import sessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import React from 'react';
import { closeModal, otherForm,openModal } from '../../actions/modal_actions';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    otherForm: 'Login',
});

const mdp = dispatch => ({
    action: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
});

export default connect(msp,mdp)(sessionForm);
