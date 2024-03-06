<template>
  <main >
    <SectionCeremony class="container-ceremony" />
    
  </main>
</template>

<script setup>
import SectionCeremony from '../components/SectionCeremony.vue';
</script>

<style scoped>
.container-ceremony{
  @apply md:mx-auto flex flex-row justify-around items-center bg-beige;
  min-height: calc(80vh);
}
</style>
