<template>
  <section :class="templateStyle.content">
    <div :class="templateStyle.leftStyle">
      <p :class="templateStyle.title">
        MAXGROUP: MAXIMIZE COST SAVING BY ELASTIC RESOURCES
      </p>
    </div>
    <div :class="templateStyle.rightStyle">
      <p>
        optimizes the host clusters according to the service’s work modes and
        runtime characteristics to maximize cost saving and minimize the impacts
        brought by the fluctuations of elastic resources (e.g. spot instance
        interruption).
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
  name: 'template2'
}
</script>
