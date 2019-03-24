import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';
import React from 'react';
import {closeModal, otherForm, openModal} from '../../actions/modal_actions';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Login',
    otherForm: 'Signup',
});

const mdp = dispatch => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
   
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())

});

export default connect(msp, mdp)(sessionForm);