
export const fetchUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'get'
    })
);

export const fetchUser = id => (
    $.ajax({
        method: 'get',
        url: `/api/users/${id}`
    })
);