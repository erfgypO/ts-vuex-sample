export default {
    loadClient({ commit }) {
        commit('SET_CLIENT', {
            id: 1,
            name: 'John Doe',
            confirmed: true
        });
    }
}
