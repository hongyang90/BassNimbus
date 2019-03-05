import React from 'react';


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {play: false, pause: true , currentTime: null};
        this.url = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--36e9f169e68f4f9153889063f154b47715455a8b/1.m4a";
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play () {
        this.setState({ play: true, pause: false });
        this.audio.play();
    }

    pause () {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }

    // window.addEventListener('play', () => {
    //     this.setState({play: true, pause: false});
    // });

    render() {

        return (
            <div className='musicplayer'>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        );
    }
}

export default Music;
