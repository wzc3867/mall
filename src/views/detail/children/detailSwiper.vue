<!--  -->
<template>
  <div>
      <!-- <Swiper :imgswip="swiperimg" :ISshow="false"></Swiper> -->
  </div>
</template>

<script>
import Swiper from "../../../components/common/swiper/swiper.vue";
export default {
  props: {
    swiperimg:{
      required:true
    },
  },
  created() {
  
  },
  data () {
    return {
    flag: true
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