import { createApp } from 'vue';
import App from './App.vue';
import Pokedex from './components/Pokedex.vue';
import DetailsPokemon from './components/DetailsPokemon.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Pokedex, name: 'pokedex' },
  { path: '/details/:id', component: DetailsPokemon, name: 'details-pokemon' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
