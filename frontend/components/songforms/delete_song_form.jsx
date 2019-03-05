import React from 'react';

class DeleteSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.songId = this.props.song.id;
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteSong(this.songId)
            .then(() => this.props.closeModal());
    }


    render() {
        
        return (
            <form onSubmit={this.handleSubmit} className='deletesongform'>
                <div><img src={this.props.song.photoUrl} alt=""/></div>
                <p>Are you sure you want to permanently delete this song?</p>
                <input type="submit" value='Delete Song'/>
            </form>
        )
    }
}

export default DeleteSongForm;