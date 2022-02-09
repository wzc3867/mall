<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
