<script setup>
import Layout from './layouts/Layout.vue'
import './assets/reveal.css'
import { onMounted } from 'vue'

function observerIntersect() {
  const threshold = 0.5
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > threshold) {
        entry.target.classList.remove('reveal')
        observer.unobserve(entry.target)
      }
    })
  }

  document.documentElement.classList.add('reveal-loaded')

  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
}

onMounted(() => {
  // Création d'une instance MutationObserver pour observer les mutations du DOM
  const mutationObserver = new MutationObserver(function (mutationsList, observer) {
    // Pour chaque mutation détectée
    mutationsList.forEach(function (mutation) {
      // Exécuter votre code d'IntersectionObserver pour observer les éléments nouvellement ajoutés ou modifiés
      observerIntersect()
    })
  })

  // Configuration de l'observateur pour surveiller les changements dans le corps de la page
  const observerConfig = { childList: true, subtree: true }
  // Démarrage de l'observation des mutations du DOM avec la configuration définie
  mutationObserver.observe(document.body, observerConfig)
})
</script>

<template>
  <Layout />
</template>

<style scoped></style>
