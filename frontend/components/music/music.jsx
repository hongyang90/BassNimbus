import React from 'react';


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {volume: 1, played: 0.5, duration: null };
        this.audio = new Audio();
        this.audio.preload = 'metadata';
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

        
    }

    setDuration(e) {
        let minutes = "" + Math.floor(e.target.duration / 60);
        let seconds = "0" + Math.floor(e.target.duration % 60);
        let time = minutes.substr(-2) + ':' +seconds.substr(-2);
        this.setState({ duration: time });
    }

    componentDidUpdate(prevProps) {

        if (this.props.playState && prevProps.songUrl !== this.props.songUrl) {

            this.audio.src = this.props.songUrl;
            this.audio.preload = 'metadata';
            this.audio.addEventListener('loadeddata', this.setDuration.bind(this));
            this.play();
        } else if (prevProps.songUrl === this.props.songUrl && this.props.playState) {
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
                <div className='songinfo'>
               
                </div>
            )
        } else {
            return (
                <div className='songinfo' >
                    <div><img src={currentSong.photoUrl}/></div>
                    <div>
                        <div className='musicsongtitle'>{currentSong.title}</div>
                    </div>
                </div>
            )
        }
    }



    render() {
        return (
            <div id='musicplayer'>
                {this.togglePlay()}
                <div className='progressBar'>
                    <p id='currenttime'></p>
                    <progress min={0} max={1} value={this.state.played}></progress>
                    {/* <progress type='range' min={0} max={1} value={this.state.played} /> */}
                    <p id='totaltime'>{this.state.duration}</p>
                </div>
                <div className='volume'>
                    <i className="fas fa-volume-up"></i>
                    <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume.bind(this)} />
                </div>
                {this.displaySongInfo()}
            </div>
        );
    }
}

export default Music;
