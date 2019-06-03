<template>
  <!-- 手动添加一个id， 不然是挂载不到vue上面的 -->
  <div id="app">
    <Foo/>
    <div>
      <router-link to="/home">Home页面</router-link>
      <router-link to="/">Bar页面</router-link>
    </div>

    <router-view/>
  </div>
</template>
<script>
import Foo from "./components/Foo.vue";
export default {
  components: {
    Foo
  },
  metaInfo: {
    title: "首页"
  }
};
</script>
