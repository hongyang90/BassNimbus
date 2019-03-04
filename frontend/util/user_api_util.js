
// export const fetchUsers = () => (
//     $.ajax({
//         url: '/api/users',
//         method: 'get'
//     })
// );
// Add later if need all users

export const fetchUser = id => (
    $.ajax({
        method: 'get',
        url: `/api/users/${id}`
    })
);