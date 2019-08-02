<template>
  <section :class="templateStyle.content">
    <div :class="templateStyle.leftStyle">
      <!--      <p :class="templateStyle.date">JUNE 10, 2016</p>-->
      <p :class="templateStyle.title">
        MAXCHAOS: IMPROVES RESILIENCE AND AVAILABILITY CONTINUOUSLY
      </p>
    </div>
    <div :class="templateStyle.rightStyle">
      <p>
        improves the system’s resilience and availability continuously, which
        includes chaos engineering best practices and chaos engineering tools.
      </p>
      <p>
        <img :src="require('@/assets/home_block_commercial_crew.jpg')" />
      </p>
    </div>
  </section>
</template>

<script>
import templateMinix from './templateMinix'
export default {
  mixins: [templateMinix],
  name: 'template3'
}
</script>
