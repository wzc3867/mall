<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BSscroll from 'better-scroll'
export default {
  name: "component_name",
  props:{
    /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
       /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
       probeType: {
		    type: Number,
        default: 3
      },
      click:{
        type: Boolean,
        default: true
      }
  },
  data () {
    return {
      scroll:null
    };
  },
  mounted() {
    
  //  setTimeout(this.__initScroll,200)
  this.$nextTick(() => {
    this.__initScroll();
    this.scroll.finishPullUp()
    console.log(this.scroll);
  })
  },
  methods:{
    __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BSscroll(this.$refs.wrapper, {
          probeType: 3,
          click: this.click,
          pullUpLoad: true,
          pullDownRefresh:true
        })

        // // 2.将监听事件回调
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos);
        })

        // // 3.监听上拉到底部
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载');
          this.$emit('pullingUp');
        })
        // this.scroll.on('pullingDown',() => {
        //   console.log(112);
        // })
      },
  },
  updated() {
    let img = this.$refs.wrapper.getElementsByTagName("img");
    let count = 0;
    let length = img.length;
    if(length) {
      let timer = setInterval(() => {
        if(count == length) {
          this.scroll.refresh();
          clearInterval(timer);
        } else if(img[count].complete) {
          count++;
        }
      },100)
    }
  }
}
</script>
<style lang="less" scoped>
// .wrapper{
//   height:500px
// }
</style>