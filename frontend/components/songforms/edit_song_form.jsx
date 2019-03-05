import React from 'react';

class EditSongForm extends React.Component {


    handleSubmit(e) {
        e.preventDefault();
        // this.props.updateSong(song)
        //     .then(() => this.props.closeModal());
    }

    render() {
        return (
            <form className='editsongform'>
                    <p></p>
                    <button>Edit Song</button>
            </form>
        )
    }
}

export default EditSongForm;