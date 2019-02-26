export const createUser = user => (
    $.ajax({
        url: '/api/users',
        method: 'post',
        data: {user}
    })
);

export const createSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'post',
        data: {user}
    })
);

export const destroySession = () => (
    $.ajax({
        url: '/api/session',
        method: 'delete',
    })
);