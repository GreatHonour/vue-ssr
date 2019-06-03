import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

export default () => {
    let store = new Vuex.Store({
        state: {
            userName: 'xx'
        },
        mutations: {
            setUserName(state) {
                state.userName = 'WW'
            }
        },
        actions: {
            set_userName({ commit }) {
                return new Promise((resolve, rejects) => {
                    setTimeout(() => {
                        commit('setUserName')
                        resolve();
                    }, 10000)
                })
            }
        },
    })

    // 服务端的值不会替换本地值
    if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store;
}