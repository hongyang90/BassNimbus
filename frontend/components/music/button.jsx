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

    // componentDidUpdate(prevProps, prevState) {
    //     if () {

    //     }
    // }

    handleClickPlay() {
        // this.setState({play: true});
        this.props.playSong(this.props.song.soundUrl);
    }

    handleClickPause() {
        // this.setState({ play: false });

        this.props.pauseSong();
    }


    render() {

        if (this.props.playState === true && this.props.songUrl === this.props.song.soundUrl) {

            return (
                <div onClick={this.handleClickPause}>
                    Pause
                 </div>
            )
        } else {
            return (
                <div onClick={this.handleClickPlay}>
                    Play
            </div>
            )
        }
      
    }
}

export default Button;