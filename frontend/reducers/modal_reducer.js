import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';


const modalReducer = (state = {modalType: null, song: null}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                modalType: action.modal,
                song: action.song
                };
        case CLOSE_MODAL:
            return {
                modalType: null,
                song: null
            };
        default:
            return state;
    }
};

export default modalReducer;
