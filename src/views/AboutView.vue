<template>
  <main>
    <section class="story-content ">
      <h1 class="text-title reveal reveal-1">Notre histoire</h1>
      <img src="@/assets/nous.jpg" alt="Photo de nous" class="img-nous" />
      <div class="container-timeline ">
        <TimeLine />
      </div>
    </section>
    <section class="container-carroussel reveal">
      <Carroussel />
    </section>
  </main>
</template>

<script setup>
import Carroussel from '../components/Carroussel.vue'
import TimeLine from '../components/TimeLine.vue';
</script>

<style>
.story-content {
  @apply md:mx-auto flex flex-col justify-around items-center bg-tbeige;
  min-height: calc(80vh);
}
.container-timeline {
  @apply max-w-screen-xl my-[2em];
}
.img-nous {
  @apply max-w-72 shadow-2xl rounded-xl;
}

.container-carroussel{
  @apply mx-auto bg-beige;
}
</style>
