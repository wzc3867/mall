<!--  -->
<template>
  <div class="Contain">
    <div class="swiper-box" ref="swiperBox" @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" v-if="Ishow">
      <img :src="item.image?item.image:item" v-for="(item, index) in imgswip" :key="index" ref="swipers" class="displayImg">
    <!-- <img src="//s11.mogucdn.com/mlcdn/c45406/180808_7abl65i38i34lgk746061b4bg183b_640x960.jpg" alt=""> -->
  </div>
  <div class="swiper-box_detail" ref="swiperBox" @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" v-else>
    <div v-for="(item, index) in imgswip" :key="index" ref="swipers" style="height:100%;width:100vw">
        <img :src="item.image?item.image:item" style="width:100%">
    </div>
    <!-- <div style="height:100%">
      <img src="//s11.mogucdn.com/mlcdn/c45406/180808_7abl65i38i34lgk746061b4bg183b_640x960.jpg" alt="" style="width: 100%">
    </div> -->
  </div>

   <!-- 指示点渲染 -->
  <div class="indicatorBox">
    <ul class="indicator">
      <li :class="[[index==indicatorIndex-1?ISactive:'']]"  v-for="(item, index) in imgswip" :key="index" ref="sw" @click="changeImg(index)"></li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    imgswip:{
      required:true
    },
    ISshow:{
      type:Boolean,
      default:true
    }
  },
  mounted() {
    this.Ishow = this.ISshow;
    setTimeout(() =>{
      console.log(this.$refs.swipers);
      this.handleDom();
      this.staatTime();
    },300)
  },
  data () {
    return {
      currentIndex:1,//当前的索引值
      swiperStyle:{},//轮播组件样式
      totalWidth:0,//轮播图片宽度
      indicatorIndex:1,//轮播下面的指示点
      Timer:'',//轮播滚动的定时器
      Scrolling:false, //判断是否正在滑动的标志位
      startX:'',//手指触碰的X轴坐标
      currentX:'',//当前位置的X坐标
      distance:'',//移动的距离
      moveRatio:0.25,//判断手指移动图片几分之几就要切换图片
      Ishow:false,//
    };
  },
  components: {},

  computed: {
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
      this.Timer=setInterval(() => {
        this.currentIndex++;
        this.indicatorIndex++;
        this.changemove();
      }, 3000);
    },
    // 操作DOM节点
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
    // 设置位置的标志为
    setTransform(position){
     this.swiperStyle.transform = `translateX(${position}px)`;
    },
    //轮播移动的方法
    changemove(){
      // this.Scrolling = true;
      // console.log('scroll'+this.Scrolling);
      const curLocation = -this.totalWidth*this.currentIndex;
      // 滑动动画
       this.changAmin();
      //  滑动的位置
       this.setTransform(curLocation);
      //  检查滑动的位置
      this.checkLoacation()
      
      // console.log('scrolling1'+this.Scrolling);
    },
    //轮播移动的动画
    changAmin(){
      this.Scrolling= true;
      this.swiperStyle.transition = "1s";
    },
    // 检查轮播图的位置
    checkLoacation(){
      //判断下面的轮播点是否与图片对应上
      if(this.indicatorIndex >=this.$refs.swipers.length+1) {
        this.indicatorIndex =1;
      } else if(this.indicatorIndex == 0){
        this.indicatorIndex =4
      }
      setTimeout(()=>{
        // 1.校验正确的位置
          this.Scrolling = false
          // console.log('111'+that.Scrolling);
             // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          console.log(this.$refs.swipers.length);
          if(this.currentIndex >= this.$refs.swipers.length-1) {
            this.currentIndex =1;
            this.setTransform(-this.currentIndex*this.totalWidth)
          } else if(this.currentIndex == 0 && this.indicatorIndex == 4) {
            // console.log(22);
            this.currentIndex =this.$refs.swipers.length;
            this.setTransform(-this.currentIndex*this.totalWidth)
          }
          // this.$emit('transitionEnd',this.currentIndex-1)
      },1200)
      //保存VUE指向
      //  const that = this;
       //等待轮播过度动画完成来判断是否为最后一张图片或者第一张图片，如果是则立刻变动位置，如果页面缩小了他则监听不到
      //  this.$refs.swiperBox.addEventListener('transitionend',function(){
      //     that.Scrolling = false
      //     // console.log('111'+that.Scrolling);
      //        // 1.校验正确的位置
      //     that.swiperStyle.transition = '0ms';
      //     if(that.currentIndex >= that.$refs.swipers.length+1) {
      //       that.currentIndex =1;
      //       that.setTransform(-that.currentIndex*that.totalWidth)
      //     } else if(that.currentIndex == 0 && that.indicatorIndex == 4) {
      //       // console.log(22);
      //       that.currentIndex = that.$refs.swipers.length;
      //       that.setTransform(-that.currentIndex*that.totalWidth)
      //     }
      //     //  console.log('222'+that.Scrolling);
      //   })
    },
    changeImg(index){
       clearInterval(this.Timer);
      let position = 0
      let num = index +1;
      // console.log(num);
      // console.log('cur1***',this.currentIndex);
    
      if(num == 1 && this.currentIndex == this.$refs.swipers.length){
        this.currentIndex++;
        position =- (this.currentIndex * this.totalWidth);
        const that = this;
         that.changAmin();
         that.setTransform(position);
        that.checkLoacation();
        that.indicatorIndex = 1;
        this.staatTime();
        return;
      } 
      position = -(num*this.totalWidth);
      // console.log(position);
      this.indicatorIndex = num;
      this.currentIndex = num;
     
      this.changAmin();
      this.setTransform(position);
      this.staatTime();
    },
    TouchStart(e) {
      console.log('4444'+this.Scrolling);
      if(this.Scrolling) {
        console.log(1);
        // console.log(123);
        clearInterval(this.Timer);
        // return false;
        return;
      } 
      // e.preventDefault();
      console.log(333);
      clearInterval(this.Timer);
     // 3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
    },
    TouchMove(e) {
       if(this.Scrolling) {
        return false;
      } 
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      const currloaction = -this.currentIndex*this.totalWidth + this.distance;
      this.setTransform(currloaction);
    },
    TouchEnd(e) {
      if(this.Scrolling) {
        this.staatTime();
        console.log(4);
        return false;
      } 
      let movedistance = Math.abs(this.distance);
      if(this.distance == 0) {
        return;
      } else if(this.distance <0 && movedistance > this.totalWidth*this.moveRatio) {
          console.log(1111);
          this.currentIndex++;
          this.indicatorIndex++;
          console.log(this.Timer);
          this.changAmin();
          this.setTransform(-this.currentIndex*this.totalWidth);
          this.checkLoacation();
          this.staatTime();
      } else if(this.distance >0 && movedistance > this.totalWidth*this.moveRatio) {
        console.log(2222);
          this.currentIndex--;
          this.indicatorIndex--;
          this.changAmin();
          this.setTransform(-this.currentIndex*this.totalWidth);
          this.checkLoacation();
          this.staatTime();
      } else{
        console.log(3333);
          this.changAmin();
          this.setTransform(-this.currentIndex*this.totalWidth);
          this.checkLoacation();
          this.staatTime();
      }
    },
  }
}

</script>
<style lang='less' scoped>
.Contain{
  display:flex;
  position: relative;
  overflow:hidden;
}
.swiper-box{
  .pxToVW(375);
  .pxToVW(195, height);
    display:flex;
    position: relative;
    // overflow: hidden;
}
.swiper-box_detail{
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
  margin-left: 1.5vw;
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
.displayImg{
  width: 100%
}
</style>