import { createStore, Store } from "vuex";
import type { InjectionKey } from "vue";
import client from "@/store/modules/client";
export interface State {
    appName: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        appName: 'Hello World'
    },
    modules: {
        client
    }
})
