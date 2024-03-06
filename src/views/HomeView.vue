<script setup>
import CountRebour from '../components/CountRebour.vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section class="content-home">
      <TheWelcome />
    </section>
    <section>
      <CountRebour />
    </section>
  </main>
</template>


<style>
.content-home {
    @apply md:mx-auto;
  min-height: calc(80vh);
}
</style>