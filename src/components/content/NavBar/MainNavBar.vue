<!--  -->
<template>
  <div>
      <NavBar>
        <div slot="middle">{{titledisplay}}</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from '../../common/navBar/navBar.vue'
export default {
  data () {
    return {
    };
  },

  components: {
      NavBar
  },

  computed: {
    titledisplay(){
      if(this.$route.path == "/home") {
        return "购物街"
      } else if(this.$route.path == "/category") {
        return "商品分类"
      } else if(this.$route.path == "/cart") {
        return "购物车"
      } else if(this.$route.path == "/profile") {
        return "小码哥商城"
      }
    }
  },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>