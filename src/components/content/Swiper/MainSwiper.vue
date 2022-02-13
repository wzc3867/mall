<!--  -->
<template>
  <div>
      <Swiper :imgswip="swiperimg"></Swiper>
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
  created() {
  
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