export const requestFactory = {
    uathRequest(url, method, headers, body) {
        return fetch(url, {
            method: method,
            headers: headers,
            body: body
        });
    }
}