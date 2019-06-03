import Vue from 'vue'
import App from './App.vue'
import createRouter from './router.js'
import createStore from './store.js'


// 为了兼容服务端，要把这个方法改造成函数
// 用户每次访问都会创建一个新的实例
// .$mount("#app");
export default () => {

    // 返回是一个函数
    let router = createRouter();
    let store = createStore();

    const app = new Vue({
        router,
        store,
        render: (h) => h(App)
    })
    // 返回 vue ,router ,vuex
    return { app, router, store }
}

