<template>
  <div id="app">
    <MainNavBar v-show="Isshow"></MainNavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar v-show="Isshow"/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
import MainNavBar from './components/content/NavBar/MainNavBar.vue'
export default {
  components: {
    MainTabBar,
    MainNavBar,
  },
  updated() {
    if(this.$route.path == "/detail") {
      this.Isshow = false;
    } else {
      this.Isshow = true;
    }
  },
  data() {
    return {
      Isshow:true
    }
  },
}
</script>

<style scoped>
  #app{
    height:100vh;
  }
</style>
