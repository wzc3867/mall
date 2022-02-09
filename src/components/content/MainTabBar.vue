<!--  -->
<template>
  <div>
      <tabBar>
        <tabBarItem  Link="/home">
            <img src="../../assets/img/tabbar/home.svg" alt="">
        </tabBarItem>
        <tabBarItem  Link="/home">
            <img src="../../assets/img/tabbar/home.svg" alt="">
        </tabBarItem>
        <tabBarItem  Link="/home">
            <img src="../../assets/img/tabbar/home.svg" alt="">
        </tabBarItem>
        <tabBarItem  Link="/home">
            <img src="../../assets/img/tabbar/home.svg" alt="">
        </tabBarItem>
      </tabBar>
  </div>
</template>

<script>
import tabBar from '../common/tabbar/Tabar.vue'
import tabBarItem from '../common/tabbar/TabarItem.vue'
export default {
  data () {
    return {
    };
  },

  components: {
      tabBar,
      tabBarItem
  },

  computed: {},


  methods: {}
}

</script>
<style lang='less' scoped>
</style>