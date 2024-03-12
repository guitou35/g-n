<template>
      <div class="card-ceremony md:basis-1/4 text-center reveal">
        <div class="w-[60px] mx-auto reveal-1">
        <img :src="'./src/assets/'+srcImage" alt="alt" >
    </div>
        <h2 class="uppercase font-cormorant text-4xl mt-3 reveal-2">
            <slot name="title"></slot>
        </h2>
        <p class="mt-4 text-gray-600 reveal-3">
            <slot name="paragraph"></slot>
        </p>
      </div>
</template>
  
  <script setup>
defineProps({
    srcImage: {
        type: String,
        required: true
    }
});
</script>
  
  <style>
  .card-ceremony{
    @apply flex flex-col;
  }
  </style>
  
  