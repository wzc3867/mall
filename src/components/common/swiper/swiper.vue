<!--  -->
<template>
  <div style="overflow: hidden;">
    <div class="swiper-box" :style="move">
    <img :src="item.image" v-for="(item, index) in imgswip" :key="index" ref="swipers" >
  </div>
  </div>
</template>

<script>
export default {
  props:{
    imgswip:{
      required:true
    }
  },
  mounted() {
    setTimeout(() =>{
      console.log(this.$refs.swipers);
      this.staatTime()
    },300)
  },
  data () {
    return {
      currentIndex:0
    };
  },
  components: {},

  computed: {
    move(){
      return 'transform:translateX('+this.currentIndex*-375+'px';
    }
  },

  methods: {
    staatTime(){
     
      setInterval(() => {
        this.currentIndex++;
      }, 3000);
    }
  }
}

</script>
<style lang='less' scoped>
.swiper-box{
  .pxToVW(375);
  .pxToVW(195, height);
    display:flex;
    
}
</style>