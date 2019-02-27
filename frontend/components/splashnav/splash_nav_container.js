import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import SplashNav from './splash_nav';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashNav);