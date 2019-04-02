import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = (props) => {

    let user = props.users[props.comment.userId];
    let currentUserId = props.currentUserId;

    function displayButton() {
        if (user.id === currentUserId) {
            return (
                <div>
                    <i className="fas fa-times"></i>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }




    return(
        <div className='commentitem'>
            <div className='leftside'>
                <img src={user.photoUrl} alt=""/>
                <div className='commentindexinfo'>
                    <div className='username'>{user.username}</div>
                    <div className='commentbody'>{props.comment.body}</div>
                </div>

            </div>
            <div className='deletecomment' onClick={()=> props.deleteComment(props.comment.id)} >{displayButton()}</div>
        </div>
    )
}

export default CommentIndexItem;