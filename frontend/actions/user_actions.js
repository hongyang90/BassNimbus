import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const fetchUser = id => dispatch => (
    UserAPI.fetchUser(id)
        .then(user => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)) )
);

export const fetchUsers = () => dispatch => (
    UserAPI.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);