import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchUser = id => dispatch => (
    UserAPI.fetchUser(id)
        .then(user => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)) )
);

