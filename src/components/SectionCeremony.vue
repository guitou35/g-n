<template>
  <section>
    <h1 class="title-ceremony">Programme</h1>
    <div class="wrapper-ceremony">
      <CeremonyCardsItem src-image="h2-icon-img-1.png">
        <template #title> Ceremonie </template>
        <template #paragraph>
          Samedi 24 Aout 2024 <br>
          14h
          Mairie de Trévérien
        </template>
      </CeremonyCardsItem>
      <CeremonyCardsItem src-image="h2-icon-img-2.png">
        <template #title> Vin d'honneur </template>
        <template #paragraph> </template>
      </CeremonyCardsItem>
      <CeremonyCardsItem src-image="h2-icon-img-3.png">
        <template #title> La fête </template>
        <template #paragraph> 
          17h
        </template>
      </CeremonyCardsItem>
    </div>
  </section>
</template>

<script setup>
import CeremonyCardsItem from './CeremonyCardsItem.vue'
</script>

<style scoped>
.wrapper-ceremony {
  @apply flex md:flex-row flex-col justify-center gap-4;
}
.title-ceremony{
    @apply text-[4rem] md:text-8xl text-tgreen font-cormorant py-[3rem] text-center uppercase;
}
</style>
