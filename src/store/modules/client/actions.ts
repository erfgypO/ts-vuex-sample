export default {
    loadClients({ commit }) {
        const clients = [
            {
                id: 1,
                name: 'John Doe',
                confirmed: true
            },
            {
                id: 2,
                name: 'Jane Doe',
                confirmed: false
            },
            {
                id:3,
                name: 'Joe Doe',
                confirmed: true
            }
        ]
        commit('SET_CLIENTS', clients);
    }
}
