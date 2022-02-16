<!--  -->
<template>
  <div class="Contain">
    <div class="swiper-box" ref="swiperBox">
    <img :src="item.image" v-for="(item, index) in imgswip" :key="index" ref="swipers" >
  </div>
   <!-- 指示点渲染 -->
  <div class="indicatorBox">
    <ul class="indicator">
      <li :class="[[index+1==currentIndex?ISactive:'']]"  v-for="(item, index) in imgswip" :key="index" ref="sw"></li>
    </ul>
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
    },
    // 判断是否为当前类名
    ISactive(){
      try{
      return 'activeColor'
      } catch(e) {
        console.log(e);
      }
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
      // 滑动动画
       this.changAmin();
      //  滑动的位置
       this.setTransform(curLocation);
      //  检查滑动的位置
      this.checkLoacation()
    },
      changAmin(){
      this.swiperStyle.transition = "all 1s ease";
    },
    checkLoacation(){
      setTimeout(()=>{
        // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if(this.currentIndex >= this.$refs.swipers.length+1) {
            this.currentIndex =1;
            this.setTransform(-this.currentIndex*this.totalWidth)
          }
          // this.$emit('transitionEnd',this.currentIndex-1)
      },1000)
    }
  }
}

</script>
<style lang='less' scoped>
.Contain{
  display:flex;
  position: relative;
}
.swiper-box{
  .pxToVW(375);
  .pxToVW(195, height);
    display:flex;
    position: relative;
}
.indicator{
  display:flex;
}
.indicator li{
  .pxToVW(10);
  .pxToVW(10,height);
  border-radius: 2vw;
  background-color:#fff;
  margin-left: 1vw;
  list-style: none;
}
.indicatorBox{
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  bottom:1.5vw;
}
ul{
  padding:0px;
  margin:0px;
}
.activeColor{
  background-color: rgba(212,62,46,1.0)!important;
}
</style>