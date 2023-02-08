export const tokenHolder = {

    getToken() {
        return window.$token;
    },

    setToken(token) {
        window.$token = token;
    }
}