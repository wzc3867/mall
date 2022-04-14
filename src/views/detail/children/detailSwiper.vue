<!--  -->
<template>
  <div v-if="swiperimg.length >0">
     {{swiperimg}}
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
  watch:{
   swiperimg(val) {
     console.log(123);
      console.log("监听", val);
      // this.editMsg = "---" + newnew + "---";
    },
  },
  data () {
    return {
      SwiperArrar:[]
    }
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
  watch:{
    change(){
      return this.swiperimg;
      console.log(123);
    }
  },

  methods: {}
}

</script>
<style lang='less' scoped>
.imgBox {
  height: 300px;
  text-align: center;
}
</style>