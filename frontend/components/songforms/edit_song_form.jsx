import React from 'react';

class EditSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.song;
    };


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateSong(this.state)
            .then(() => this.props.closeModal())
                // .then(() => this.props.history.push('/'));
    }

    render() {
        let song = this.props.song;

        return (
            <form onSubmit={this.handleSubmit} className='editsongform'>
                <div><img src={song.photoUrl}/></div>
                <div>{song.title}</div>
                <div>
                    <label >Edit Title:
                        <input type="text" onChange={this.update('title')} placeholder='Please Enter a Title'/>
                    </label>

                </div>
                <input type="submit" value='Edit Song'/>
            </form>
        )
    }
}

export default EditSongForm;