import React from 'react';
import Layout from '../layout/layout';


class UserShow extends React.Component {

    constructor(props) {
        super(props)
        // debugger
    }
    componentDidMount() {
    }

    render() {
        const user = this.props.currentUser;
        return (
            <Layout >
                <div className='show'>
                    <div className='show-banner'>
                        <div className='profile-pic'>
                            <img className='user-img' src={user.photoUrl} alt=""/>
                          
                        </div>
                        <div className='display-name'>
                            <h2>Username Goes Here</h2>
                        </div>
                    </div>
                    <div className='show-content'>
                        <div className='labels'>
                            <span>Tracks</span>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
};

export default UserShow;