export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const PLAYSONG = 'PLAYSONG';

export const playSong = (song) => ({
    type: PLAYSONG,
    songUrl: song.soundUrl,
    songId: song.id
});

export const play = () => ({
    type: PLAY,
});

export const pauseSong = () => ({
    type: PAUSE,
});

// export const playSong = dispatch => (
//     (songUrl) => dispatch(play(songUrl))
// );

// export const pauseSong = dispatch => (
//     () => dispatch(pause())
// );

