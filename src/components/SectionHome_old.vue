<template>
  <section class="bg-trose py-2">
    <div class="m-auto">
      
      <figure
        data-tooltip-target="tooltip-right" 
        data-tooltip-placement="bottom"
        class="m-auto max-w-4xl transition-all duration-300 cursor-pointer filter hover:grayscale grayscale-0 shadow-2xl"
      >
        <img class="rounded-lg" src="@/assets/proposal.jpeg" alt="image description" />

        <figcaption
          class="absolute px-4 md:text-8xl md:top-20 left-20 text-4xl text-white bottom-6 top-20 md:-left-20"
        >
          <h1 class="title-home">
            Nelly <br />
            & <br />
            Guillaume
          </h1>
        </figcaption>
      </figure>
      <div
        id="tooltip-right"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
      >
        Eilat, lieu de la proposal le 14 mars 2022
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
    <div class="text-xl text-center p-2 ">Nous allons nous marier !</div>
    <DateHome />
  </section>
</template>

<script setup>
import simpleParallax from 'simple-parallax-js'
import { onMounted } from 'vue'
import CountRebour from './CountRebour.vue'
import DateHome from './DateHome.vue'

import { initTooltips } from 'flowbite'
onMounted(() => {
  var image = document.getElementsByClassName('bgParallax')
  new simpleParallax(image, {
    orientation: 'down',
    scale: 1.2
  })
})
initTooltips();
</script>

<style>
.header-background {
  /* Ajoutez la propriété background-image et ajustez le chemin de l'image en conséquence */
  background-image: url('@/assets/proposal.jpeg');
  background-size: cover; /* Ajustez selon vos préférences */
  background-position: center; /* Ajustez selon vos préférences */
  color: white; /* Couleur du texte dans le header */
  padding: 20px; /* Ajustez selon vos préférences */
  text-align: center;
}

.img-proposal {
  @apply md:w-3/5 m-auto;
  position: relative;
}
</style>
