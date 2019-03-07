import React from 'react';


class Music extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {play: false, pause: true , currentTime: null};
        this.audio = new Audio();
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

   

    componentDidUpdate(prevProps) {
        this.audio.src = this.props.songUrl;
        if (this.props.playState) {
            this.audio.play();
        } else {
            this.pause();
        }
    }

    play() {
        this.audio.play();
        // this.props.play();
    }

    pause() {
        this.audio.pause();
        // this.props.pauseSong();
    }

    setVolume(e) {
        this.audio.volume = parseFloat(e.target.value);
    }

    // togglePlay () {
    //     if (this.audio.paused === false) {
    //         return (
    //             <div onClick={this.pause}><i className="fas fa-pause"></i></div>
    //         )
    //     } else {
    //         return (
    //             <div onClick={this.play}><i className="fas fa-play"></i></div>

    //         )
    //     }
    // }



    render() {
        return (
            <div className='musicplayer'>

                <div onClick={this.play}><i className="fas fa-play"></i></div>
                <div onClick={this.pause}><i className="fas fa-pause"></i></div>

                <div>
                    <input type='range' min={0} max={1} step='any' value={this.audio.volume} onChange={this.setVolume.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Music;
