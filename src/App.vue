<template>
  <div id="app">
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
    MainNavBar,
  }
}
</script>

<style scoped>
  #app{
    height:100vh;
  }
</style>
