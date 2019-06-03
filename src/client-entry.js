/*
    浏览器文件
 */
// 引入vue实例
import createApp from './main.js'

// 调用实例
const { app } = createApp();
// 挂载函数
// 如果页面上没有id, 可以自己添加，或者强制激活vue
// app.$mount("#app", true);
app.$mount("#app");