<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */

import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height:100%;
    overflow:hidden;
    background-color: #000;
  }
</style>
