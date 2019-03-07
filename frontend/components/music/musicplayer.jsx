import React from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            pip: false,
            playing: true,
            controls: true,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
        // this.state = {play: false, pause: true , currentTime: null};
        // this.url = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--36e9f169e68f4f9153889063f154b47715455a8b/1.m4a";
        // this.url = this.props.songUrl;
        // this.audio = new Audio();
        // this.play = this.play.bind(this);
        // this.pause = this.pause.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.url !== this.props.songUrl) {
    //         // this.setState({url: this.props.songUrl});
    //         this.playPause()
    //     } else {
    //         this.pause();
    //     }
    // }

  
    play() {
        this.props.play();
    }

    pause() {
        this.props.pauseSong();
    }

    setVolume (e) {
        this.setState({ volume: parseFloat(e.target.value) });
    }

    onSeekChange (e) {
        this.setState({ played: parseFloat(e.target.value) });
    }

    onSeekMouseDown (e) {
        this.setState({ seeking: true });
    }

    onSeekMouseUp (e) {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    ref (player) {
        this.player = player;
    }

    onProgress (state) {
        console.log('onProgress', state)
        if (!this.state.seeking) {
            this.setState(state)
        }
    }


    render() {
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state;
        return (
            <div className='musicplayer'>
                <ReactPlayer 
                    url={this.props.songUrl}
                    playing={this.props.playState}
                    controls={controls}
                    volume={volume}
                    onProgress={this.onProgress}
                
                />
                <button onClick={this.play.bind(this)}>Play</button>
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
               
                    <progress max={1} value={loaded} />     
                
            </div>
        );
    }
}

export default MusicPlayer;
