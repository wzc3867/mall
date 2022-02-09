<!--  -->
<template>
  <div>
      <tabBar>
        <tabBarItem  Link="/home">
            <img slot="icon" src="../../assets/img/tabbar/home.svg" alt="">
            <img slot="activeIcon" src="../../assets/img/tabbar/home_active.svg" alt="">
            <div slot="text">首页</div>
        </tabBarItem>
        <tabBarItem  Link="/category">
            <img slot="icon" src="../../assets/img/tabbar/category.svg" alt="">
            <img slot="activeIcon" src="../../assets/img/tabbar/category_active.svg" alt="">
            <div slot="text">分类</div>
        </tabBarItem>
        <tabBarItem  Link="/cart">
            <img slot="icon" src="../../assets/img/tabbar/cart.svg" alt="">
            <img slot="activeIcon" src="../../assets/img/tabbar/cart_active.svg" alt="">
            <div slot="text">购物车</div>
        </tabBarItem>
        <tabBarItem  Link="/profile">
            <img slot="icon" src="../../assets/img/tabbar/profile.svg" alt="">
            <img slot="activeIcon" src="../../assets/img/tabbar/profile_active.svg" alt="">
            <div slot="text">我的</div>
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