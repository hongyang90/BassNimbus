export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';

const play = (song) => ({
    type: PLAY,
    song
    // play: true
});

const pause = () => ({
    type: PAUSE,
    // play: false
});

export const playSong = dispatch => (
    () => dispatch(play())
);

export const pauseSong = dispatch => (
    () => dispatch(pause())
);

