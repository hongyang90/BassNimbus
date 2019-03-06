import React from 'react';
import Layout from '../layout/layout';

class UploadSong extends React.Component {
    constructor(props) {
        super(props);
       this.user = this.props.currentUser;
        this.state = { title: '', photoUrl: null, photoFile: null, soundUrl: null, soundFile: null }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleSound = this.handleSound.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    // const reader = new FileReader();
    // const file = e.currentTarget.files[0];
    // reader.onloadend ()
    //     this.setState({ imageUrl: reader.result, imageFile: file });

    // if(file) {
    //     reader.readAsDataURL(file);
    // } else {
    // this.setState({ imageUrl: "", imageFile: null });
    // }


    handleSubmit(e) {
        e.preventDefault();
        // this.props.createSong(this.state);
        
        const formData = new FormData();
        formData.append('song[title]', this.state.title);

        if (this.state.photoFile) {
            formData.append('song[photo]', this.state.photoFile);
        }

        if (this.state.soundFile) {
            formData.append('song[sound]', this.state.soundFile);
        }
        this.props.createSong(formData)
        .then(res => this.props.history.push(`/users/${this.user}`));
        // $.ajax({
        //     url: '/api/songs',
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // });

    }

    handlePhoto(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } 
        // else {
        //     this.setState({ imageUrl: "", imageFile: null });
        // }
    }

    handleSound(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ soundUrl: reader.result, soundFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
        // else {
        //     this.setState({ imageUrl: "", imageFile: null });
        // }
    }

    render() {
        let preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt=""/> : null;
        return (
            <Layout>
                <div className='uploadmain'>
                    <div className='uploadsub'>
                        <div>
                            <h1>Upload New Track</h1>
                        </div>
                        <form onSubmit={this.handleSubmit} className='uploadsongform' >
                            <label>Song Title:
                            <input type="text" onChange={this.update('title')} />
                            </label>
                            <div className='preview'>
                                {preview}
                            </div>
                            <div>
                                <label>Upload Song Art
                                    <input type="file" onChange={this.handlePhoto}/>

                                </label>
                            </div>
                            <div>
                                <label> Upload a Song
                                    <input required type="file" onChange={this.handleSound}/>
                                </label>
                            </div>
                            <input type="submit" value="Submit"/>
                        </form>

                    </div>
                </div>
            </Layout>
        )
    }
};

export default UploadSong;