import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = (props) => {

    let user = props.users[props.comment.userId];

    return(
        <div className='commentitem'>
            <div className='leftside'>
                <img src={user.photoUrl} alt=""/>
                <div className='commentindexinfo'>
                    <div className='username'>{user.username}</div>
                    <div className='commentbody'>{props.comment.body}</div>
                </div>

            </div>
            <div className='deletecomment'><i className="fas fa-trash-alt"></i></div>
        </div>
    )
}

export default CommentIndexItem;