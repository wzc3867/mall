<!--  -->
<template>
  <div>
      <Swiper></Swiper>
      <div>{{swiperimg}}</div>
  </div>
</template>

<script>
import Swiper from "../../common/swiper/swiper.vue";
export default {
  props: {
    swiperimg:{
      required:true
    }
  },
  data () {
    return {
   
    };
  },

  components: {
      Swiper
  },

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>