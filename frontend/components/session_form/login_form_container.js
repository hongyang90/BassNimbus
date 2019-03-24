import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import React from 'react';
import {closeModal, otherForm, openModal} from '../../actions/modal_actions';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Login',
    otherForm: 'Signup',
    otherModal: 'signup'
});

const mdp = dispatch => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    // otherAction: user => dispatch(signup(user)),
   
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))

});

export default connect(msp, mdp)(sessionForm);