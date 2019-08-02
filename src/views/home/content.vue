<template>
  <div>
    <section :class="$style.title">
      <p>
        SPOTMAX HELP YOU MAXIMIZE THE COST SAVING WITHOUT COMPROMISING ON THE
        AVAILABILITY BY LEVERAGING HIGHLY ELASTIC RESOURCES IN CLOUD.
      </p>
    </section>
    <section :class="$style.container">
      <ul :class="$style.ulStyle">
        <li
          v-for="(item, index) in articleData"
          :key="index"
          :class="$style.liStyle"
        >
          <div :class="$style.picture">
            <img :src="item.imgSrc" />
          </div>
          <router-link :to="item.link" :class="$style.textStyle">
            {{ item.text }}
          </router-link>
          <router-link :to="item.link" :class="$style.link"
            >LEARN MORE</router-link
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      articleData: [
        {
          imgSrc: require('@/assets/home_block_reusable.jpg'),
          text: 'MAXARCH: MAKES A HIGH AVAILABLE ARCHITECTURE',
          link: { name: 'Template1' }
        },
        {
          imgSrc: require('@/assets/home_block_commercial_crew.jpg'),
          text: 'MAXGROUP: MAXIMIZE COST SAVING BY ELASTIC RESOURCES',
          link: { name: 'Template2' }
        },
        {
          imgSrc: require('@/assets/multiplanetary_thumbnail.jpg'),
          text: 'MAXCHAOS: IMPROVES RESILIENCE AND AVAILABILITY CONTINUOUSLY',
          link: { name: 'Template3' }
        }
      ]
    }
  }
}
</script>

<style lang="less" module>
@import (reference) '../../style/common.less';
.title {
  width: 100%;
  padding-top: 70px;
  box-shadow: inset 0 100px 100px -100px rgba(0, 0, 0, 0.4);
  p {
    font-size: 18px;
    color: #3a3a3a;
    font-weight: bold;
  }
}

.container {
  width: 990px;
  padding: 80px 0 120px;
  margin: 0 auto;

  .ulStyle {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .liStyle {
    width: 262px;
    height: 234px;
    padding: 24px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    margin-right: 30px;
    margin-bottom: 30px;
    text-align: left;
  }

  .liStyle:nth-child(3n + 3) {
    margin-right: 0px;
  }

  .picture {
    position: relative;
    width: 100%;
    height: 116px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
      vertical-align: middle;
    }
  }

  .textStyle {
    position: relative;
    width: 100%;
    height: 75px;
    color: #3a3a3a;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    display: block;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    outline: none;
  }

  .textStyle:hover {
    text-decoration: underline;
    outline: none;
  }

  .link {
    font-size: 12px;
    color: #3569a4;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    text-decoration: none;

    &::after {
      content: '→';
      color: #3a3a3a;
      margin-left: 5px;
    }
  }

  .link:hover {
    border-bottom: 2px solid #3569a4;
  }
}
</style>
