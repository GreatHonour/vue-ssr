/*
服务端
*/

import createApp from './main.js'

// 服务端调用方法
export default (context) => {
    // 为了防止路由异步逻辑，所以使用Promise
    return new Promise((resolve, rejects) => {
        // 调用实例
        const { app, router, store } = createApp();
        // meta标签
        const meta = app.$meta()
        // 为了防止服务端启动的时候，直接访问别的页面，默认index页面
        router.push(context.url)




        // 当router 挂载完毕载返回app, 不然会报错
        router.onReady(() => {
            // 获取当前路径，匹配组件,
            let matchedComponents = router.getMatchedComponents()
            // 需要把当前页面中匹配到的组件，调用当前的asyncData方法
            Promise.all(matchedComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({ store })
                }

            })).then(() => {
                // 把vuex 的state 挂载在 服务端上下文中的state
                context.state = store.state;
                context.meta = meta;
                // 挂载函数
                resolve(app)
            })
        })
    })
}

