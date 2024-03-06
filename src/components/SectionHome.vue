<template>
  <section class="reveal bg-[url('@/assets/proposal.jpeg')] bg-cover bg-fixed h-[calc(100vh-128px)] bg-center backdrop-contrast-50 flex flex-col justify-center items-center">
    <h1 class="title-home reveal-1">
      Nelly 
      & 
      Guillaume
    </h1>
    <div class="text-date reveal-2">Samedi 24 Aout 2024 | Evran</div>
    <div class="reveal-3">
      <RouterLink to="/story" class="block mt-6 py-2 px-8 text-2xl bg-white rounded-full text-black rounded hover:bg-gray-500 hover:text-white">Bienvenue</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style>
.title-home{
  @apply md:text-9xl text-6xl text-white text-center;
}
.text-date{
  @apply text-white text-lg md:text-2xl py-4;
}
</style>
