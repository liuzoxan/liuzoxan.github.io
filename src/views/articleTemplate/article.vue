<template>
  <div :class="$style.main">
    <section :class="$style.headline">
      <p>ARTICLE</p>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style lang="less" module>
@import (reference) '../../style/common.less';
.main {
  position: relative;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 80px;
}

.headline {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  height: 48px;
  line-height: 48px;
  border-bottom: 2px solid #b7b7b7;

  p {
    color: #666;
    font-size: 12px;
    text-align: left;
  }
}
</style>
