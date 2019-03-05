import { connect } from 'react-redux';
import Discover from './discover';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers} from '../../actions/user_actions';

const mapStateToProps = state => ({
    songs: Object.values(state.entities.songs),
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);