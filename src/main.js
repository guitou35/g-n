import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './index.css';
import firebaseConfig from './firebaseConfig.js';

import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App);

app.component(VueCountdown.name, VueCountdown);

app.use(createPinia());
app.use(router);

app.mount('#app');
