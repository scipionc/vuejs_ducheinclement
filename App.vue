<template>
  <div id="app">
    <div class="main-content">
      <router-view></router-view>
      <footer-component />
    </div>
  </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    'footer-component': FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-content {
  width: 100%;
  background-color: aquamarine;
  margin: 0 auto;
}

.pokemon-container img {
  width: 8vw;
}

.pokemon-container span img {
  width: 4vw;
}

span span {
  font-size: 75%;
}
</style>
