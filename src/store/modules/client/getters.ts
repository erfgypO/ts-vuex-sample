export default {
    getClientId(state) {
        return state.client.id;
    },
    getClientName(state) {
        return state.client.name;
    },
    getClientStatus(state) {
        return state.client.confirmed ? 'Confirmed' : 'Not Confirmed';
    }
}
