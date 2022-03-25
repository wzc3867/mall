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
      totalWidth:0
    };
  },
  mounted() {
    // 获取DOM元素
    this.$nextTick(() => {
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
        this.totalWidth = FirstImg.offsetWidth
      }
    })
  },
  methods: {
    // 初始化设置
    Init() {
      
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
</style>