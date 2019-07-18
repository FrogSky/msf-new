<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
/*重置，自定义通用类名，自定义编程依赖样式*/
@import './assets/css/common/var.less';
@import './assets/css/common/reset.css';
@import './assets/css/common/base.css';
</style>
