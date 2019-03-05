export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, song) => {
    return {
        type: OPEN_MODAL,
        modal: modal,
        song: song
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
