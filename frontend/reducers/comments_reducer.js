import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_ONE_SONG} from '../actions/song_actions';

const CommentsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign(newState, {[action.comment.id]: action.comment});
        case REMOVE_COMMENT:
            delete newState[action.commentId.id];
            return newState;
        case RECEIVE_ONE_SONG:
            if (action.payload.comments === undefined) {
                return {};
            } else {
                return Object.assign({}, action.payload.comments);
                
            };
        default:
            return oldState;
    }
};

export default CommentsReducer;