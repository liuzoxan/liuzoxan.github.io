<template>
  <header :class="headerStyle.headerStyle">
    <div :class="headerStyle.leftStyle">
      <router-link
        :to="{ name: 'Main' }"
        :class="headerStyle.logo"
      ></router-link>
    </div>
    <div :class="headerStyle.rightStyle">
      <ul :class="headerStyle.ulStyle">
        <!--        <li>-->
        <!--          <router-link to="#">ABOUT</router-link>-->
        <!--        </li>-->
        <li>
          <a href="javascript:;" @click="changeLocal">{{ $t('language') }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import headerStyle from './header.module.less'
export default {
  name: 'Header',
  data() {
    return {
      headerStyle
    }
  },
  computed: {
    ...mapGetters(['language'])
  },
  methods: {
    ...mapActions(['setLanguage']),
    changeLocal() {
      const lang = this.language === 'en' ? 'cn' : 'en'
      this.setLanguage(lang)
      this.$i18n.locale = lang
    }
  }
}
</script>
