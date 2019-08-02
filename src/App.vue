<template>
  <div id="app">
    <header-layout></header-layout>
    <router-view />
    <foot-layout></foot-layout>
  </div>
</template>

<script>
import HeaderLayout from './views/header'
import FootLayout from './views/footer'
export default {
  name: 'app',
  components: {
    HeaderLayout,
    FootLayout
  }
}
</script>

<style lang="less" type="text/less">
@import 'style/common.less';
</style>
