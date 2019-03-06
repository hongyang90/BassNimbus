import React from 'react';
import Layout from '../layout/layout';

class UploadSong extends React.Component {
    constructor(props) {
        super(props);
        let user = this.props.currentUser;
        this.state = { title: '', artistId: user };
        this.handleSubmit = this.handleSubmit.bind(this);
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

        $.ajax({
            url: '/api/songs',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });

    }

    render() {
        return (
            <Layout>
                <div className='uploadmain'>
                    <div className='uploadsub'>
                        <div>
                            <h1>Upload New Track</h1>
                        </div>
                        <form onSubmit={this.handleSubmit} className='uploadsongform' >
                            <label>Song Title:
                            {/* <input type="text" onChange={this.forceUpdate('title')} /> */}
                            </label>

                        </form>

                    </div>
                </div>
            </Layout>
        )
    }
};

export default UploadSong;