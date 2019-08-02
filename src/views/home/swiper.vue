<template>
  <swiper
    :options="swiperOptionTop"
    :class="$style.galleryTop"
    ref="swiperTop"
    @slideChange="slideChange"
  >
    <swiper-slide
      v-for="(item, index) in dataslide"
      :class="$style[`slide${index + 1}`]"
      :key="item.id"
    ></swiper-slide>
    <div :class="$style.navigationBar">
      <div :class="$style.bothSides"></div>
      <ul :class="$style.ulBar">
        <li
          v-for="item in dataslide"
          :key="item.id"
          :class="changeStyle(item.id)"
          @click="itemClick(item.id)"
        >
          <p>
            <span>{{ `0${item.id}` }}</span>
            <em>{{ item.content }}</em>
          </p>
        </li>
      </ul>
      <div :class="$style.bothSides" style="border-left: #21272b"></div>
    </div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  data() {
    return {
      activeId: 1,
      dataslide: [
        {
          id: 1,
          content: 'Cloud Architecture Design'
        },
        {
          id: 2,
          content: 'Cloud Cost Saving'
        },
        {
          id: 3,
          content: 'Cloud Chaos Engineering'
        }
      ],
      swiperOptionTop: {
        effect: 'fade',
        loop: true,
        autoplay: true
        // simulateTouch: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    changeStyle(num) {
      num = parseInt(num)
      if (
        (num < this.dataslide.length && num === this.activeId) ||
        (num === this.dataslide.length && this.activeId === 0)
      ) {
        return this.$style.active
      }
    },
    slideChange() {
      const activeIndex = this.$refs.swiperTop.swiper.activeIndex
      this.activeId = activeIndex % this.dataslide.length
    },
    itemClick(id) {
      const mySwiper = this.$refs.swiperTop.swiper
      id = parseInt(id)
      if (id === mySwiper.activeIndex) {
        return
      }
      mySwiper.slideToLoop(id - 1)
    }
  }
}
</script>

<style lang="less" module>
@import (reference) '../../style/common.less';
.galleryTop {
  height: 756px;
  width: 100%;

  .slide1 {
    background: url('../../assets/arch_1.png') no-repeat center center;
  }
  .slide2 {
    background: url('../../assets/group_1.png') no-repeat center center;
  }
  .slide3 {
    background: url('../../assets/group_1.png') no-repeat center center;
  }
}

.navigationBar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  background: rgba(24, 28, 31, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  overflow: hidden;

  .bothSides {
    width: 17%;
    height: 100%;
    background: #21272b;
  }

  .ulBar {
    width: 66%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      flex: 1;
      height: 100%;
      color: #ffffff;
      display: block;
      text-align: left;
      background: #21272b;
      box-sizing: border-box;
      border-left: 1px solid rgb(75, 82, 86);
      margin-left: 1px;
      cursor: pointer;

      p {
        width: 80%;
        padding: 0 10%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .minxinCenter();
      }

      span,
      em {
        font-style: normal;
        text-align: left;
        font-size: 14px;
        width: 90%;
      }

      span {
        width: 10%;
      }
    }

    li:last-child {
      border-right: 1px solid rgb(75, 82, 86);
      margin-right: 1px;
    }

    li:hover {
      em {
        text-decoration: underline;
      }
    }

    .active {
      background: transparent;
      border-color: transparent;
    }
  }
}
</style>
