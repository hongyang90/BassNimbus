import { connect } from 'react-redux';
import SongShow from './song_show';
import {fetchSong} from '../../actions/song_actions';
import {fetchUsers} from '../../actions/user_actions';

const msp = (state, ownProps) => {
    let song = state.entities.songs[ownProps.match.params.songId];
    return {
    song: song,
    users: state.entities.users,
      
    // add comments here from payload
}};

const mdp = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(SongShow);