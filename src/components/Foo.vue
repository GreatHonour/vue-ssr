<template>
  <div class="foo" @click="handleClick">Foo</div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      alert("2");
    }
  },
  mounted() {
    console.log("3333333");
  }
};
</script>

<style>
.foo {
  background: red;
}
</style>
