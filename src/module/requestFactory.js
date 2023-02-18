export const requestFactory = 
{
    postJsonRequest(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    },

    postAuthedJsonRequest(url, body, token) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type'  : 'application/json;charset=utf-8',
                'Authorization' : 'Bearer_' + token
            },
            body: JSON.stringify(body)
        });
    }
}