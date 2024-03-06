<template>
        <vue-countdown :time="time" :interval="100" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }" title="24 Aout 2024">
            <div class="grid grid-cols-4 gap-1 justify-items-center mx-auto my-2 p-2 text-black font-cormorant">
                    <div>{{ days }}</div>
                    <div>{{ hours }}</div>
                    <div>{{ minutes }}</div>
                    <div>{{ seconds }}</div>
                    <div class="text-date_countdown">Jours</div>
                    <div class="text-date_countdown">Heures</div>
                    <div class="text-date_countdown">Mins</div>
                    <div class="text-date_countdown">Secs</div>
            </div>
  </vue-countdown>
  </template>
  
  <script >
  export default {
    methods: {
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  },
  data() {
    const now = new Date();
    const theDay = new Date('August 24, 2024 00:00:00');

    return {
      time: theDay - now,
    };
  },
};
  </script>
  
  <style>
  .text-date_countdown{
    @apply text-[0.6rem] uppercase text-black;
  }
  </style>
  