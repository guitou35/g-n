<script setup>
import { RouterView } from 'vue-router'
import Footer from './Footer.vue'
import Header from './Header.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {})
})
</script>

<template>
  <Header />

  <RouterView />
  <Footer />
</template>

<style scoped></style>
