<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <MainNavBar></MainNavBar>
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
import MainNavBar from './components/content/NavBar/MainNavBar.vue'
export default {
  components: {
    MainTabBar,
    MainNavBar
  }
}
</script>

<style>

</style>
