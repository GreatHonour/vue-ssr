import Vue from 'vue';
import Router from 'vue-router';
import Bar from './components/Bar.vue';
import Home from './components/home.vue';
// 设置添加meta标签或者title
import VueMeta from 'vue-meta'

Vue.use(Router);
Vue.use(VueMeta);

export default () => {
    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'Bar',
                component: Bar
            },
            {
                path: '/home',
                name: 'Home',
                component: Home
            }
        ]
    })

    return router
}