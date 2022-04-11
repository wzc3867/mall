<template>
    <div id="beriefInt">
        <div class="TopBox">
            <div class="square"></div>
            <span class="line"></span>
        </div>
        <div class="text">
            {{Intro}}
        </div>
        <div class="BotBox">
            <div class="square"></div>
            <span class="line botline"></span>
        </div>
    </div>
</template>
<script>
export default {
  name: "briefInt",
  props:{
      Intro:{
          type: String,
          required: true,
          default: ""
      }
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
.square{
    width:.3rem;
    height:.3rem;
    background-color:#333
}
.line{
    display:inline-block;
    width: 6rem;
    // height:.1rem;
    border-bottom: 1px solid #666;
    position:absolute;
    left:.3rem;
    top:.3rem;
    // background-color:#333
}
.TopBox{
    position: relative;
    margin-left: 1rem;
    margin-top: 1rem;
}
.text{
    padding:1rem 1rem;
    font-size:.9rem;
    color: #666;
}
.BotBox{
    position: relative;
    transform: translateX(95%);
    // margin-top:0.9rem;
}
.botline{
    left:-6rem
}
</style>