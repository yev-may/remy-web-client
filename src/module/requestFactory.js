JSON_REQUEST_HEADERS = {
    'Content-Type': 'application/json;charset=utf-8'
}

export const requestFactory = {


    jsonRequest(url, method, body) {
        return uathRequest(url, method, JSON_REQUEST_HEADERS, body);
    },

    request(url, method, headers, body) {
        return fetch(url, {
            method: method,
            headers: headers,
            body: body
        });
    }
}