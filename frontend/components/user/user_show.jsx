import React from 'react';


class UserShow extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className='show'>
                <div className='show-banner'>
                    <div className='profile-pic'>
                        <div className='user-img'></div>
                        <div><input className='inputfile' type="file-upload" type='file'/>
                            {/* <p>Update photo</p> */}
                        </div>
                    </div>
                    <div className='display-name'>
                        <h2>text</h2>
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
        )
    }
};

export default UserShow;