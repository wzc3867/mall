<!--  -->
<template>
  <div style="overflow: hidden;">
    <div class="swiper-box" ref="swiperBox">
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
      this.handleDom();
      this.staatTime();
    },300)
  },
  data () {
    return {
      currentIndex:1,
      swiperStyle:{},
      totalWidth:0
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
        this.changemove();
      }, 3000);
    },
    handleDom(){
      const EleImg = this.$refs.swipers;
      const EleBox = this.$refs.swiperBox;
      if(EleImg.length>1) {
        const FirstCloe = EleImg[0].cloneNode(true);
        const LastClone = EleImg[EleImg.length-1].cloneNode(true);
        EleBox.insertBefore(LastClone, EleImg[0]);
        EleBox.appendChild(FirstCloe);
        this.swiperStyle = EleBox.style;
        this.totalWidth = EleBox.clientWidth;
        // 滑动到正确的位置
        this.setTransform(-this.totalWidth);
      }
    },
    setTransform(position){
     this.swiperStyle.transform = `translateX(${position}px)`;
    },
    changemove(){
      const curLocation = -this.totalWidth*this.currentIndex;
      this.changAmin().then(() =>{
          console.log(this.currentIndex);
          if(this.currentIndex >= this.$refs.swipers.length) {
           this.currentIndex = 1;
         }
       });
       this.setTransform(curLocation);
    },
    changAmin(){
      return new Promise(()=>{
          this.swiperStyle.transition = "all 1s ease";
      })
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