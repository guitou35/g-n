<template>
  <main >
    <SectionCeremony class="container-ceremony" />
    <l-map
      v-if="!loading"
      :markers="markers"
    />
    
  </main>
</template>

<script setup>
import SectionCeremony from '../components/SectionCeremony.vue';
import LMap from '../components/SectionCeremonyMap.vue';
</script>

<style scoped>
.container-ceremony{
  @apply md:mx-auto bg-tbeige;
  min-height: calc(80vh);
}
</style>
