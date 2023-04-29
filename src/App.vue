<template>
  <custom-navbar />
  <router-view/>
  <custom-footer />
</template>

<script>
import customNavbar from '@/components/customNavbar.vue';
import customFooter from '@/components/customFooter.vue';

export default {
  name: 'App',
  components: {
    customNavbar,
    customFooter,
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
}
img {
    pointer-events: none;
}
</style>
