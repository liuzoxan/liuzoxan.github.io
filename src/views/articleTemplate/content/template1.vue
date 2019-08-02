<template>
  <section :class="templateStyle.content">
    <div :class="templateStyle.leftStyle">
      <p :class="templateStyle.title">
        MAXARCH: MAKES A HIGH AVAILABLE ARCHITECTURE
      </p>
    </div>
    <div :class="templateStyle.rightStyle">
      <p>
        Makes a high available architecture, which includes fault oriented and
        recovery oriented design instructions and the frameworks for building
        the service with high availability and resilience.
      </p>
      <p>
        <img :src="require('@/assets/multiplanetary_thumbnail.jpg')" />
      </p>
    </div>
  </section>
</template>

<script>
import templateMinix from './templateMinix'
export default {
  mixins: [templateMinix],
  name: 'template1'
}
</script>
