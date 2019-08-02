<template>
  <div>
    <swiper-layout></swiper-layout>
    <content-layout></content-layout>
  </div>
</template>

<script>
import SwiperLayout from './home/swiper'
import ContentLayout from './home/content'

export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    SwiperLayout,
    ContentLayout
  }
}
</script>
