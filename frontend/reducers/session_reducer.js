import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullState = {id: null};
const sessionReducer = (state = nullState , action) => {
    Object.freeze(nullState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }; 
        case LOGOUT_CURRENT_USER:
            return nullState;
        default:
            return state;
    }
};

export default sessionReducer;