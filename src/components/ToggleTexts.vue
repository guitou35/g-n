<template>
    <div>
        <span id="text-animation"></span>
    </div>
</template>

<script setup>
const words = ["Degerme mat", "Bienvenue"];
let index = 0;
let isDeleting = false;
let text = '';
let delay = 2000;

function animateText() {
  const currentWord = words[index];
  
  if (isDeleting) {
    text = currentWord.substring(0, text.length - 1);
  } else {
    text = currentWord.substring(0, text.length + 1);
  }
  
  document.getElementById('text-animation').textContent = text;
  
  let speed = 200;
  
  if (isDeleting) {
    speed /= 2;
  }
  
  if (!isDeleting && text === currentWord) {
    isDeleting = true;
    delay = 2000;
  } else if (isDeleting && text === '') {
    isDeleting = false;
    index = (index + 1) % words.length;
    delay = 500;
  }
  
  setTimeout(animateText, speed);
}

setTimeout(animateText, delay);

</script>
  
<style scoped>
#text-animation{
    border-right: 2px solid black;
}
</style>
  