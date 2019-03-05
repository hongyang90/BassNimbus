import React from 'react';
import LoginFormContainer from '../../components/session_form/login_form_container';
import SignupFormContainer from '../../components/session_form/signup_form_container';
import EditSongContainer from '../../components/songforms/edit_song_container';

const Modal = ({modal, song, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'editsong':
            component = <EditSongContainer song={song}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

};

export default Modal;