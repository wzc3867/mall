<template>
  <div id="app">
    <MainNavBar></MainNavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
