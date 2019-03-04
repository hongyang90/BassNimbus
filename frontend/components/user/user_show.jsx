import React from 'react';
import Layout from '../layout/layout';


class UserShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params.userId;
        this.props.fetchUser(id);
    }

    render() {
        // this user should be the fetched user not current user
        const user = this.props.user;
        if (user === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <Layout >
                    <div className='show'>
                        <div className='show-banner'>
                            <div className='profile-pic'>
                            {/* this needs to be the actual user pic not current user */}
                                <img className='user-img' src={''} alt=""/> 
                              
                            </div>
                            <div className='display-name'>
                                <h2>{user.username}</h2>
                            </div>
                        </div>
                        <div className='show-content'>
                            <div className='labels'>
                                <span>Tracks</span>
                            </div>
                            <div className='userssongs'>
    
                            </div>
                        </div>
                    </div>
                </Layout>
            )
            
        }
    }
};

export default UserShow;