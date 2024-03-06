<template>
    <div class="timeline-wrapper reveal" id="timeline">
      <span class="main-line reveal"></span>
      <TimeLineItemImpaire class="mb-[1em]">
        <template #time>2015</template>
        <template #text>La rencontre</template>
        <template #paragraph>
          Imaginez cette scène : Nelly pensant se diriger vers sa destination, totalement ailleurs dans
          ses pensées, tandis que Guillaume, dans une situation cocasse, sans électricité chez lui,
          se baladait dans les rues pour tuer le temps. C'est ainsi qu'ils se sont rencontrés,
          donnant le coup d'envoi à une amitié épique !
        </template>
      </TimeLineItemImpaire>
      <TimeLineItemPaire class="my-[1em]">
        <template #time>2016</template>
        <template #text>La relation</template>
        <template #paragraph>
          Après un an d'aventures, de rires et de complicité, leur amitié a finalement évolué vers
          une histoire d'amour digne d'un conte de fées !
        </template>
      </TimeLineItemPaire>
      <TimeLineItemImpaire class="my-[1em]">
        <template #time>2018</template>
        <template #text>Le pacs</template>
        <template #paragraph>
          Après avoir sillonné les rues d'Aix-en-Provence pendant un an, Nelly et Guillaume ont
          décidé de prendre les choses au sérieux en signant leur propre « contrat d'amour » à la
          mairie.
        </template>
      </TimeLineItemImpaire>
      <TimeLineItemPaire class="my-[1em]">
        <template #time>2022</template>
        <template #text>La demande</template>
        <template #paragraph>
          Pendant leur escapade en Israël, Guillaume a sorti le grand jeu et fait
          sa grande demande à Nelly, qui a répondu par un retentissant "OUIIIII !"
        </template>
      </TimeLineItemPaire>
      <TimeLineItemImpaire class="my-[1em]">
        <template #time>2022</template>
        <template #text>La princesse</template>
        <template #paragraph>
          L'histoire s'est enrichie d'un nouveau chapitre avec l'arrivée de la petite princesse
          Ilana, apportant joie et émerveillement dans leur vie.
        </template>
      </TimeLineItemImpaire>
      <TimeLineItemPaire class="mt-[1em]">
        <template #time>2024</template>
        <template #text>Le jour J</template>
        <template #paragraph>
          C'est le moment de faire la fête !!
          Le compte à rebours est lancé pour le jour où Nelly et Guillaume échangeront leurs vœux
          et danseront jusqu'au bout de la nuit. Venez faire partie de cette nouvelle aventure qui
          s'annonce encore plus palpitante que les précédentes !
        </template>
      </TimeLineItemPaire>
      </div>
    
</template>

<script setup>
import { onMounted } from 'vue';
import TimeLineItemPaire from './TimeLineItemPaire.vue';
import TimeLineItemImpaire from './TimeLineItemImpaire.vue';

function setHauteur(){
  const heightTimeLine = document.getElementById('timeline').offsetHeight;
  const line = document.getElementsByClassName("main-line");
  line[0].style.height = `${heightTimeLine}px`;
  line[0].style.opacity = 1;
}

onMounted(() => {
document.addEventListener('scroll', (e) => {
  setHauteur();
})
});


</script>

<style scoped>
.timeline-wrapper{
  @apply flex flex-col;
  
}
.timeline-wrapper_item{
  @apply flex flex-row justify-start px-2;
  position: relative;
}
.main-line{
    @apply bg-tgreen transition duration-700 ease-in-out;
    left: 50%;
    margin-left: 0;
    position: absolute;
    width: 1.5px;
}

</style>
