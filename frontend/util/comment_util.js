export const deleteComment = id => (
    $.ajax({
        method: 'delete',
        url: `/api/comments/${id}`
    })
)

export const createComment = (comment,song_id) => (
    $.ajax({
        method: 'post',
        url: `/api/songs/${song_id}/comments`,
        data: {comment},
        
    })
)