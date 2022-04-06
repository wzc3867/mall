<!--  -->
<template>
  <div v-if="swiperimg.length >0">
      <Swiper>
        <SwiperItem v-for="(item,index) in swiperimg" :key="index" class="imgBox">
            <img :src="item" >
        </SwiperItem>
      </Swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/common/Swper_New/Swiper.vue";
import SwiperItem from "../../../components/common/Swper_New/SwiperItem.vue"
export default {
  props: {
    swiperimg:{
      required:true,
      type:Array,
      default:[]
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
.imgBox {
  height: 300px;
  text-align: center;
}
</style>