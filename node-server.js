const express = require('express');
const Path = require('path')
const Fs = require('fs');
const app = express();
// vue提供的ssr渲染函数
const VueServerRender = require('vue-server-renderer');

// 获取这个js文件，返回是字符串
// const serverBundle = Fs.readFileSync(Path.resolve(__dirname, 'dist/server.bundle.js'), 'utf8');

const serverBundle = require(Path.resolve(__dirname,'dist/vue-ssr-server-bundle.json'));
const clientManifest = require(Path.resolve(__dirname,'dist/vue-ssr-client-manifest.json'));
// 模板
const template = Fs.readFileSync(Path.resolve(__dirname, 'dist/index-ssr.html'), 'utf8');
// 渲染函数
const render = VueServerRender.createBundleRenderer(serverBundle, {
    template,
    clientManifest
});

// 先放回html 在访问静态文件
app.get('/', (req, res) => {
    let context = { url: req.url }
    // render.renderToStream ：返回流
    // render.renderToString ：返回字符串
    // 避免bug,在回调里面渲染字符串
    render.renderToString(context, (err, html) => {
        if (err) console.log(err, 'renderToString')
        // 返回字符串，并没有什么事件之类的
        res.send(html)
    })
})


// 访问静态文件,不然访问不到 client.bundle.js
app.use(express.static(Path.resolve(__dirname, 'dist')));

// 找到路径的时候，默认返回index
app.get('*', (req, res) => {
    let context = { url: '/' }
    render.renderToString(context, (err, html) => {
        if (err) console.log(err, 'renderToString')
        res.send(html)
    })
})

app.listen(5566, () => {
    console.log('http://localhost:5566')
})
