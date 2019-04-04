import React from 'react';
import ReactPlayer from 'react-player';

class Test extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            url: null,
            playing: this.props.playState,
            controls: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            loop: true
        };

        this.playPause = this.playPause.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.toggleMuted = this.toggleMuted.bind(this);
        this.ref = this.ref.bind(this);
        this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
        this.onSeekChange = this.onSeekChange.bind(this);
        this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
        this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.skip = this.skip.bind(this);
    }

    playPause () {
        if (this.state.playing) {
            this.props.pauseSong();
        } else {
            this.props.play();
        }
        this.setState({ playing: !this.state.playing });
    }


    setVolume (e) {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    toggleMuted () {
        this.setState({ muted: !this.state.muted });
    }

   
    onSeekMouseDown (e) {
        this.setState({ seeking: true })
    }

    onSeekChange  (e)  {
        this.setState({ played: parseFloat(e.target.value) })
    }

    onSeekMouseUp (e) {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    onProgress  (state) {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    onEnded () {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }

    onDuration (duration) {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
  
    

    skip(song) {

        this.props.playSong(song.soundUrl)

    }

    ref (player) {
        this.player = player;
    }

    Time (time) {
    let mins = ~~((time % 3600) / 60);
    let secs = ~~time % 60;

    let res = "";

    res += "" + mins + ":" + (secs < 10 ? "0" : "");
    res += "" + secs;
    return res;
    }


    togglePlay() {
        if (this.props.playState === true) {
            return (
                <div onClick={this.playPause}><i className="fas fa-pause"></i></div>
            )
        } else {
            return (
                <div onClick={this.playPause}><i className="fas fa-play"></i></div>

            )
        }
    }

    renderVolume() {
        if (this.state.muted ) {
            return (
                <i onClick={this.toggleMuted} className="fas fa-volume-mute"></i>
            )
        } else {
            return (
                <i onClick={this.toggleMuted} className="fas fa-volume-up"></i>
            )
        }
    }

    displaySongInfo() {
        let currentSong = this.props.currentSong;
        if (currentSong === undefined) {
            return (
                <div className='songinfo'>

                </div>
            )
        } else {
            return (
                <div className='songinfo' >
                    <div><img src={currentSong.photoUrl} /></div>
                    <div>
                        <div className='musicsongtitle'>{currentSong.title}</div>
                    </div>
                </div>
            )
        }
    }

    render () {
        const { url, playing, controls, volume, muted, loop, played, loaded, duration } = this.state
        let current = this.state.playedSeconds;
        // let songs = this.props.tracklist;
        // console.log(songs)
        // if (this.props.songUrl === null) return null

        return (
            <div id='musicplayer'>
                <ReactPlayer
                    ref={this.ref}
                    url={this.props.songUrl}
                    playing={this.props.playState}
                    onEnded={this.handleSongEnd}
                    volume={volume}
                    muted={muted}
                    onProgress={this.onProgress}
                    width='0%'
                    height='0%'
                    onDuration={this.onDuration}
                
                />
                <div className='musiccontent'>
                    <div className='skip'><i className="fas fa-step-backward"></i></div>
                    <div className='playpause'>{this.togglePlay()}</div>
                    <div className='skip' ><i className="fas fa-step-forward"></i></div>
                    <div className='time'>{this.Time(current)}</div>
                    <div className='progressdiv'>
                        <input className='progressbar'
                            type='range' min={0} max={1} step='any'
                            value={played}
                            onMouseDown={this.onSeekMouseDown}
                            onChange={this.onSeekChange}
                            onMouseUp={this.onSeekMouseUp}
                            />
                    </div>
                    <div className='time'>{this.Time(duration)}</div>
                    <div className='volumediv'>
                        {this.renderVolume()}
                        <input className='volbar' type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume.bind(this)} />
                    </div>
                    <div>
                        {this.displaySongInfo()}
                    </div>
                </div>
            </div>
        )
    }


}

export default Test;