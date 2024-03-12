<template>
  <div class="timeline-wrapper_item reveal">
    <div class="basis-1/2 mx-[2em] text-end">
      <span class="circle reveal-2"></span>
      <h3 class="text-2xl uppercase reveal-3">
        <slot name="text"></slot>
      </h3>
      <p class="text-gray-500 reveal-4">
        <slot name="paragraph"></slot>
      </p>
    </div>
    <div class="text-6xl basis-1/2 mx-[0.5em] text-tgreen reveal reveal-1 font-cormorant">
      <slot name="time"></slot>
    </div>
  </div>
</template>

<script setup></script>
