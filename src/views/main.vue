<template>
  <div>
    <!--    <swiper-layout></swiper-layout>-->
    <!--    <content-layout></content-layout>-->
    <wall-layout></wall-layout>
  </div>
</template>

<script>
// import SwiperLayout from './home/swiper'
// import ContentLayout from './home/content'
import WallLayout from './home/wall'

export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    // SwiperLayout,
    // ContentLayout
    WallLayout
  }
}
</script>
