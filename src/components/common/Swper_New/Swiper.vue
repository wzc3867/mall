<template>
    <div class="SwiperBox">
        <div class="swiperContent" ref="swiperContent">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "Swiper",
  data () {
    return {
      SwiperStyle:null,
      currentWidth:0,
      currentIndex:0
    };
  },
  mounted() {
    // 获取DOM元素
    this.$nextTick(() => {
      this.Init();
      this.InitPosition();
        setInterval(() => {
        this.currentIndex++;
        this.setPosition(this.currentWidth*this.currentIndex);
        this.setAnimation();
      }, 3000);
    })
  },
  methods: {
    // 初始化轮播数组
    Init() {
        // 拿到Swiper的盒子
      const EleBox = this.$refs.swiperContent;
      // 拿到Swiper里面的图片
      const EleImg = document.getElementsByClassName("ImgBoxs");
      // 判断是不是只有一张图片，如果不是则往元素里面前后各插入一张图片
      if(EleImg.length > 1) {
        const FirstImg = EleImg[0].cloneNode(true);
        const LastImg = EleImg[EleImg.length - 1].cloneNode(true);
        EleBox.insertBefore(LastImg,EleImg[0]);
        EleBox.appendChild(FirstImg,EleImg[EleImg.length - 1]);
        // 获取样式的样式
        this.SwiperStyle = EleBox.style;
        // 获取当前图片的宽度
        this.currentWidth = FirstImg.offsetWidth;
        console.log(this.SwiperStyle);
       
      }
    },
    // 初始化设置
    InitPosition() {
      this.setPosition(this.currentWidth)
    },
    // 设置正确的位置
    setPosition(pos) {
      console.log(`translateX(-${pos})`);
      this.SwiperStyle.transform = `translateX(-${pos}px)`
      console.log(this.SwiperStyle);
    },
    // 设置动画
    setAnimation() {
      console.log( this.SwiperStyle);
      this.SwiperStyle.transition = "1s "
    },
    //检查轮播位置

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
</style>