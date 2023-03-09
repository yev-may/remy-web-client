import { tokenHolder } from './tokenHolder.js'

export default 
{
    postJson(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    },

    postAuthedJson(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type'  : 'application/json;charset=utf-8',
                'Authorization' : 'Bearer_' + tokenHolder.getToken()
            },
            body: JSON.stringify(body)
        }).then(response => this.checkResponseResult(response));
    },

    checkResponseResult(response) {
        if (response.status == 401) {
            window.location.pathname = '/auth';
        }
        return response;
    }
}