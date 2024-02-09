
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div class="max-w-md p-8 bg-white rounded shadow-lg">
    <img src="@/assets/proposal.jpeg" alt="Image Mariage" class="mb-4 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Vous êtes invités à notre mariage</h2>
    <p class="text-gray-700 mb-4">
      Chers amis et famille, c'est avec une joie immense que nous vous invitons à célébrer
      notre journée spéciale. Votre présence rendra ce moment encore plus mémorable.
    </p>
    <h3 class="text-lg font-bold mb-2">Programme de la Journée</h3>
    <ul class="list-disc pl-6">
      <li>Cérémonie : [Heure]</li>
      <li>Vin d'honneur : [Heure]</li>
      <li>Dîner et Réception : [Heure]</li>
    </ul>
  </div>
</template>

<style>

</style>
