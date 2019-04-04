import React from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            playing: false,
            controls: true,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            loop: false,
            seeking: true
        };
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.onDuration = this.onDuration.bind(this);
        this.ref = this.ref.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.url !== this.props.songUrl) {
    //         // this.setState({url: this.props.songUrl});
    //         this.playPause()
    //     } else {
    //         this.pause();
    //     }
    // }
    onDuration (duration) {
        console.log('onDuration', duration);
        this.setState({ duration });
    }
  
    play() {
        this.props.play();
    }

    pause() {
        this.props.pauseSong();
    }

    setVolume (e) {
        this.setState({ volume: parseFloat(e.target.value) });
    }

    // onSeekChange (e) {
    //     this.setState({ played: parseFloat(e.target.value) });
    // }

    // onSeekMouseDown (e) {
    //     this.setState({ seeking: true });
    // }

    // onSeekMouseUp (e) {
    //     this.setState({ seeking: false })
    //     this.player.seekTo(parseFloat(e.target.value))
    // }

    ref (player) {
        this.player = player;
    }

    onProgress (state) {
        console.log('onProgress', state)
        if (!this.state.seeking) {
            this.setState(state);
        }
    }




    togglePlay() {
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

    mute() {
        this.setState({ volume: 0 })
    }

    unmute() {
        this.setState({ volume: .5 })
    }

    renderVolume() {
        if (this.state.volume === 0) {
            return (
                <i onClick={this.unmute.bind(this)} class="fas fa-volume-mute"></i>
            )
        } else {
            return (
                <i onClick={this.mute.bind(this)} className="fas fa-volume-up"></i>
            )
        }
    }


    render() {
        let { url, playing, controls, volume, muted, loop, played, loaded, duration } = this.state;
        return (
            <div className='musicplayer'>

                <ReactPlayer 
                    url={this.props.songUrl}
                    playing={this.props.playState}
                    controls={controls}
                    volume={volume}
                    onProgress={this.onProgress}
                    onDuration={this.onDuration}
                    muted={muted}
                    ref={this.ref}
                    
                />


                <div id='musicplayer'>
                    {this.togglePlay()}
                    <div className='volume'>
                        {this.renderVolume()}
                        <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume.bind(this)} />
                    </div>
                    <div>
                        <input type='range' min={0} max={1} step='any' onProgress={this.onProgress} value={this.state.played}  />

                        <progress max={1} onProgress={this.onProgress} value={played}/>
                    </div>
                    {this.displaySongInfo()}
                </div>

                {/* <button onClick={this.play.bind(this)}>Play</button>
                <button onClick={this.pause.bind(this)}>Pause</button>
                <div>
                    <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume.bind(this)} />
                </div>
                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.onSeekMouseDown.bind(this)}
                    onChange={this.onSeekChange.bind(this)}
                    onMouseUp={this.onSeekMouseUp.bind(this)}
                />       

                    <progress max={1} value={played} />
               
                    <progress max={1} value={loaded} />      */}
                
            </div>
        );
    }
}

export default MusicPlayer;
