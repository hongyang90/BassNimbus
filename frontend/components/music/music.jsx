import React from 'react';


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {volume: 0.8};
        this.audio = new Audio();
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

   

    componentDidUpdate(prevProps) {
        if (this.props.playState && prevProps.songUrl !== this.props.songUrl) {
            this.audio.src = this.props.songUrl;
            this.play();
        } else if (prevProps.songUrl === this.props.songUrl && this.props.playState) {
            // this.pause();
            this.play();
        } else {
            this.pause();
        }

        
    }



    play() {
        this.audio.play();
        this.props.play();
    }

    pause() {
        this.audio.pause();
        this.props.pauseSong();
    }

    setVolume(e) {
        this.audio.volume = parseFloat(e.target.value);
        this.setState({volume: this.audio.volume });
    }

    togglePlay () {
        if (this.props.playState === true) {
            return (
                <div onClick={this.pause}><i className="fas fa-pause"></i></div>
            )
        } else {
            return (
                <div onClick={this.play}><i className="fas fa-play"></i></div>

            )
        }
    }

    displaySongInfo () {
        let currentSong = this.props.currentSong;
        if (currentSong === undefined) {
            return(
                <div>
                    No Song Playing
                </div>
            )
        } else {
            return (
                <div>
                    <div>{currentSong.title}</div>
                    <div><img src={currentSong.photoUrl}/></div>
                </div>
            )
        }
    }



    render() {
        return (
            <div className='musicplayer'>
                {this.togglePlay()}
                {/* <div onClick={this.play}><i className="fas fa-play"></i></div>
                <div onClick={this.pause}><i className="fas fa-pause"></i></div> */}

                <div>
                    <i className="fas fa-volume-up"></i>
                    <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume.bind(this)} />
                </div>
                {this.displaySongInfo()}
            </div>
        );
    }
}

export default Music;
