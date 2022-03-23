<!-- navBar组件的封装 -->
<template>
  <div class="navbox" :style="backColor">
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle" :style="font"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    bckcolor:{
      type:String,
      default:"#ff8198"
    },
    fontcolor:{
      type:String,
      default:"#FFF"
    },
    fontweight:{
      type:String,
      default:"600"
    }
  },
  data () {
    return {
      backColor: {
        "background-color":this.bckcolor
      },
      font:{
        "color":this.fontcolor,
        "font-weight":this.fontweight
      }
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.navbox{
    .pxToVW(48, height);
    display:flex;
}
.left{
    .pxToVW(48);
    // line-height:1rem;
    // width:48px;
    // height:48px;
}
.middle{
    flex:1;
    text-align: center;
    line-height:(48/375)*100vw;
    color: #fff;
    // font-weight:600
}
.right{
    .pxToVW(48);
}
</style>