import React from 'react';
import Layout from '../layout/layout';

class UploadSong extends React.Component {
    constructor(props) {
        super(props);
        this.user = this.props.currentUser;
        this.state = { title: '', photoUrl: null, photoFile: null, soundUrl: null, soundFile: null, loading: false };
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
        this.setState({loading: true});

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

    showLoading() {
        if (this.state.loading === true) {
            return(
                <div className='upload3'>
                    <div><i className="fas fa-spinner fa-spin"></i> Uploading Files...</div>
                </div>
            )
        } else {
            return(
                <div className='upload3'>
                    <input type="submit" value="Upload My Track" />
                </div>
            )
        }
    }

    render() {
        let preview = this.state.photoUrl ? <img className='previewimg' src={this.state.photoUrl} alt="" /> : null;
        return (
            <Layout>
                <div className='uploadmain'>
                    <div className='uploadsub'>
                        <div className='uploadboxmain'>
                            <div className='uploadtitle'>
                                <h1>Upload New Track</h1>
                            </div>
                            <div className='uploadmid'>
                                <div className='preview'>
                                    {preview}
                                </div>
                                
                                <form onSubmit={this.handleSubmit} className='uploadsongform' >
                                    <h1>Song Title:
                                    </h1>
                                    <input className='songtitle' maxLength='25' type="text" onChange={this.update('title')} placeholder='song name'/>
                                    <div className='btndiv'>
                                        <label className='uploadbtn' htmlFor='songart' >Choose an Album Cover
                                        </label>
                                        <input name ='songart' id='songart' type="file" accept='image/*' onChange={this.handlePhoto} />
                                    </div>
                                    <div className='btndiv'>
                                        <label className='uploadbtn' htmlFor='songupload'> Choose song to upload
                                        </label>
                                        <input name='songupload' id='songupload' required type="file" accept='audio/*' onChange={this.handleSound} />
                                    </div>
                                    <div className='loading'>
                                        {this.showLoading()}

                                    </div>
                                  
                                </form>

                               

                            </div>
                    

                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
};

export default UploadSong;