<template>
  <section class=" py-2 bg-[url('@/assets/proposal.jpeg')] bg-cover bg-fixed h-[calc(100vh-128px)] bg-center backdrop-contrast-50 flex flex-col justify-center items-center">
            
          <h1 class="title-home">
            Nelly 
            & 
            Guillaume
          </h1>
          <div>
            <RouterLink to="/about" class="shadow-lg drop-shadow-lg block mt-6 py-2 px-4 text-white border border-2 rounded hover:bg-gray-100 bg-transparent hover:text-gray-900 hover:px-6 hover:rounded-full hover:transition-all duration-200 ease-in-out">RSVP</RouterLink>

          </div>
    
    

  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.title-home{
  @apply md:text-8xl text-4xl text-white text-center;
}
</style>
