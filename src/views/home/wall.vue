<template>
  <div>
    <section :class="$style.title">
      <p>
        Hi there, page is still in building ...
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {}
  }
}
</script>

<style lang="less" module>
@import (reference) '../../style/common.less';
.title {
  width: 100%;
  background-color: #456690;
  height: 400px;
  position: relative;
  p {
    font-size: 40px;
    font-weight: bold;
    color: #ebeeff;
    padding-top: 200px;
  }
}
</style>
