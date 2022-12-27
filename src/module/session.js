export const session = {
    getId() {
        return window.$sessionId;
    },
    setId(sessionId) {
        window.$sessionId = sessionId;
    }
}