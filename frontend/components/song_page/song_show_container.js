import { connect } from 'react-redux';
import SongShow from './song_show';
import {fetchSong} from '../../actions/song_actions';
import {fetchUsers} from '../../actions/user_actions';
import {createComment, deleteComment} from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    let song = state.entities.songs[ownProps.match.params.songId];
    return {
    song: song,
    users: state.entities.users,
    comments: Object.values(state.entities.comments),
    currentUserId: state.session.id
      
}};

const mdp = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    createComment: (comment, songId) => dispatch(createComment(comment, songId)),
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(msp, mdp)(SongShow);