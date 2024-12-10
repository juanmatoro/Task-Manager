<template>
    <!-- <div class="bg-blue-500 text-white p-6">
    Esto es una prueba de Tailwind CSS.
  </div> -->
  <div id="app">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";


export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
