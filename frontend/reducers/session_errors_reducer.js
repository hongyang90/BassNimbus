import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return {session: action.errors}
        case RECEIVE_CURRENT_USER:
            return {session: []};
        default:
            return state;
    }
};

export default sessionErrorsReducer;