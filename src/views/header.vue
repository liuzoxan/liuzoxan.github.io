<template>
  <header :class="headerStyle.headerStyle">
    <div :class="headerStyle.leftStyle">
      <router-link
        :to="{ name: 'Main' }"
        :class="headerStyle.logo"
      ></router-link>
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
