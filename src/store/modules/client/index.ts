import getters from "@/store/modules/client/getters";
import actions from "@/store/modules/client/actions";
import mutations from "@/store/modules/client/mutations";

export default {
    namespaced: true,
    state: {
        clients: []
    },
    getters,
    actions,
    mutations
}
