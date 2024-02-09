<script setup>
import {  RouterView } from 'vue-router'
import Footer from './Footer.vue';
import Header from './Header.vue';
     
</script>

<template>
  <Header />

  <RouterView class="content" />
  <Footer />
</template>

<style scoped>
.content {
    @apply md:mx-auto;
  min-height: calc(80vh);
}
</style>
