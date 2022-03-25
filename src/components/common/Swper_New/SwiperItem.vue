<template>
    <div id="item" class="ImgBoxs">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "SwiperItem",
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
  #item{
    flex-shrink: 0;
    width: 100%;
    // display:flex;
    // width:100vw;
  }
  #item img{
    width: 100%;
  }
  // .imgBox{
  //   flex:1;
  // }
</style>