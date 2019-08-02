<template>
  <footer :class="$style.footStyle">
    <div :class="$style.leftStyle">
      <div :class="$style.logo"></div>
    </div>
    <div :class="$style.rightStyle">
      <p>© 2019 SpotMax Technologies Corp.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" module>
@import './header.module.less';
.footStyle {
  .headerStyle();
  position: fixed;
  bottom: 0;
  height: 50px;
}

.leftStyle {
  .logo {
    width: 75px;
    height: 20px;
  }

  .line {
    width: 1px;
    background: #666;
    height: 18px;
  }

  .ulStyle {
    a {
      font-size: 12px;
      padding: 0;
    }
  }
}

.rightStyle {
  p {
    font-size: 12px;
    color: #8b939b;
  }
}
</style>
