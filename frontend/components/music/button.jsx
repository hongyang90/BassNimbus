import React from 'react';

class Button extends React.Component {
    // need to pass in song info from the song index item 
    constructor(props) {
        super(props);
        // this.song = this.props.song;
        // this.state = {play: false};
        // this.playState = this.props.playState;
        this.handleClickPause = this.handleClickPause.bind(this);
        this.handleClickPlay = this.handleClickPlay.bind(this);
    }


    handleClickPlay() {
        // this.setState({play: true});
        if (this.props.songUrl === this.props.song.soundUrl) {
            this.props.play();
        } else {
            this.props.playSong(this.props.song);
            
        }
    }

    handleClickPause() {
        // this.setState({ play: false });

        this.props.pauseSong();
    }


    render() {

        if (this.props.playState === true && this.props.songUrl === this.props.song.soundUrl) {

            return (
                <div className='songbuttonpause' onClick={this.handleClickPause}>
                 </div>
            )
        } else {
            return (
                <div className='songbuttonplay' onClick={this.handleClickPlay}>
                </div>
            )
        }
      
    }
}

export default Button;