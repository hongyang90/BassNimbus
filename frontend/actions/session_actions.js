import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,

});

const clearSessionErrors = () => ({
    type: CLEAR_ERRORS,
    errors: []
});

export const login = user => dispatch => (
    SessionAPIUtil.createSession(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
    SessionAPIUtil.destroySession()
        .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
    SessionAPIUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);
