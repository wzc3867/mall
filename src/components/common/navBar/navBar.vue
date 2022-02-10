<!-- navBar组件的封装 -->
<template>
  <div class="navbox">
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    background-color:@color-tint;
    display:flex;
}
.left{
    .pxToVW(48);
    // width:48px;
    // height:48px;
}
.middle{
    flex:1;
    text-align: center;
    line-height:(48/375)*100vw;
    color: #fff;
    font-weight:600
}
.right{
    .pxToVW(48);
}
</style>