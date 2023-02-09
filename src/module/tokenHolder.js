const TOKEN_KEY = "token"

export const tokenHolder = {

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }, 

    isUathed() {
        return this.getToken() != null;
    },

    logout () {
        localStorage.clear();
    }
}