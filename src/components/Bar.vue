<template>
  <div class="bar">
    如果你调研服务器端渲染 (SSR) 只是用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，
    那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时 (build time)
    简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前
    <div>{{$store.state.userName}}</div>
  </div>
</template>
<script>
export default {
  // 在组件初始化之前被调用
  asyncData({ store }) {
    return store.dispatch("set_userName");
  },
  // 页面切换，不是走的服务端，所以不会在调用asyncData，所以需要在浏览器也要调用一边
  mounted() {
    this.$store.dispatch("set_userName");
  }
};
</script>

