export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const PLAYSONG = 'PLAYSONG';

export const playSong = (songUrl) => ({
    type: PLAYSONG,
    songUrl
    // play: true
});

export const play = () => ({
    type: PLAY,
    // play: true
});

export const pauseSong = () => ({
    type: PAUSE,
    // play: false
});

// export const playSong = dispatch => (
//     (songUrl) => dispatch(play(songUrl))
// );

// export const pauseSong = dispatch => (
//     () => dispatch(pause())
// );

