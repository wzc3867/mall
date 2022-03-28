<template>
    <div class="SwiperBox">
        <div class="swiperContent" ref="swiperContent">
            <slot></slot>
            <!-- 轮播运行的小圆点 -->
        </div>
          <ul class="dotBox">
              <li v-for="(item,index) in SwiperImgLength" :key="item" :class="[{'dot':true},{'active': currentIndex == dotIndex?true:false}]"></li>
            </ul>
    </div>
</template>
<script>
export default {
  name: "Swiper",
  data () {
    return {
      SwiperStyle:null,
      currentWidth:0,
      currentIndex:1,
      SwiperImgLength:0,
      dotIndex:1
    };
  },
  mounted() {
    // 获取DOM元素
    this.$nextTick(() => {
      this.Init();
      this.InitPosition();
        //设置刚开始的时候轮播图的位置 
        this.setPosition(this.currentWidth*this.currentIndex);
        setInterval(() => {
        //改变当前坐标的位置 
        this.currentIndex++;
        this.dotIndex++
        //设置轮播滚动的过程
        this.runningSwiper();
      }, 3000);
    })
  },
  methods: {
    // 初始化轮播数组
    Init() {
        // 拿到Swiper的盒子
      const EleBox = this.$refs.swiperContent;
        console.log(EleBox);
      // 拿到Swiper里面的图片
      const EleImg = document.getElementsByClassName("ImgBoxs");
      // 判断是不是只有一张图片，如果不是则往元素里面前后各插入一张图片
      if(EleImg.length > 1) {
      
        const FirstImg = EleImg[0].cloneNode(true);
        const LastImg = EleImg[EleImg.length - 1].cloneNode(true);
        EleBox.insertBefore(LastImg,EleImg[0]);
        EleBox.appendChild(FirstImg,EleImg[EleImg.length-1]);

        // 获取样式的样式
        this.SwiperStyle = EleBox.style;
        // 获取当前图片的宽度
        this.currentWidth = FirstImg.offsetWidth;
        //保存轮播图片的子数组
        this.SwiperImgLength = EleImg.length;
      }
    },
    // 初始化设置
    InitPosition() {
      this.setPosition(this.currentWidth);
    },
    // 设置正确的位置
    setPosition(pos) {
      console.log(pos);
      // 设置位置
      this.SwiperStyle.transform = `translateX(-${pos}px)`
      // this.setAnimation();
    },
    // 设置动画
    setAnimation() {
      // console.log( this.SwiperStyle);
      this.SwiperStyle.transition = "1s "
    },
    //检查轮播位置
    checkPosition(pos) {
      if(this.dotIndex >=this.currentIndex-1) {
        this.dotIndex = 0;
      }
    // console.log( document.getElementsByClassName("ImgBoxs").length);
      //
      setTimeout(() =>{
        this.SwiperStyle.transition = "0ms"
        if(this.currentIndex >=this.SwiperImgLength) {
          this.currentIndex = 1;
          this.setPosition(this.currentIndex*this.currentWidth);
        } else if(this.currentIndex <= 0) {
          this.currentIndex = this.SwiperImgLength-2;
        }
      },1200)
    },
    //运行轮播的方法
    runningSwiper(pos){
      // 改变每次滚动的位置
      this.setPosition(this.currentWidth*this.currentIndex);
      // 设置滚动动画
      this.setAnimation();
          // 检查每次滚动后的位置是否正确
      this.checkPosition(pos);
    }
  }
}
</script>
<style lang="less" scoped>
.SwiperBox{
    overflow: hidden;
    position: relative;
}
.swiperContent{
  display:flex;
  // flex-shrink: 0;
}
.dotBox {
  display: flex;
  // background: red;
  position: absolute;
  bottom:0.7rem;
  left:50%;
  transform: translateX(-50%);
}
.dot{
  height:0.8rem;
  width:0.8rem;
  // background-color: red;
  border-radius:1rem;
  margin-left: 0.1rem;
  background-color: #fff;
}
.active{
  background-color: @color-tint;
}
</style>