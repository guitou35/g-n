<template>
  <div class="timeline-wrapper_item reveal">
    <div class="text-6xl basis-1/2 mx-[0.5em] text-end text-tgreen reveal-1 font-cormorant">
      <slot name="time"></slot>
    </div>
    <div class="basis-1/2 mx-[2em]">
      <span class="circle reveal-2"></span>
      <h3 class="text-2xl uppercase reveal-3">
        <slot name="text"></slot>
      </h3>
      <p class="text-gray-500 reveal-4">
        <slot name="paragraph"></slot>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style>
.circle{
    @apply bg-tgreen border-tgreen border-[3px];
    border-radius: 50%;
    content: "";
    height: 17px;
    left: 50%;
    margin: 0 0 0 -11px;
    position: absolute;
    top: 0;
    width: 17px;
    box-sizing: content-box;
}
</style>

