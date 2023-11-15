export default {
    getClients(state) {
        return state.clients;
    },
    getConfirmedClients(state) {
        return state.clients.filter((client: any) => client.confirmed);
    },
    getClientCount(state) {
        return state.clients.length;
    }
}
