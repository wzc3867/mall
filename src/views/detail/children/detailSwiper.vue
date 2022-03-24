<!--  -->
<template>
  <div>
      <!-- <Swiper :imgswip="swiperimg" :ISshow="false"></Swiper> -->
  </div>
</template>

<script>
import Swiper from "../../../components/common/Swper_New/Swiper.vue";
import SwiperItem from "../../../components/common/Swper_New/SwiperItem.vue"
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
      Swiper,
      SwiperItem
  },

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>