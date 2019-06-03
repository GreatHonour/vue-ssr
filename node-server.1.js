const express = require('express');
const Path = require('path')
const Fs = require('fs');
// vue提供的ssr渲染函数
const VueServerRender = require('vue-server-renderer');
const Vue = require('vue')
const app = express();

/* 
    服务端只能渲染 两个生命周期
    beforeCreate
    created
*/

const template = Fs.readFileSync(Path.resolve(__dirname,'public/index-ssr.html'), 'utf8');
// 创建Vue 实例
const vm = new Vue({
    template:`<div> SSR from template </div>`
})

// 创建render函数, 然后引入默认模板，
const render = VueServerRender.createRenderer({
    template
})


app.get('/', (rep, res) => {
    // render.renderToStream ：返回流
    // render.renderToString ：返回字符串
    // 避免bug,在回调李里面渲染字符串
    render.renderToString(vm, (err, html) => {
        if (err) console.log(err, 'renderToString')
        res.send(html)
    })
})


app.listen(3000, () => {
    console.log('http://localhost:3000')
})
