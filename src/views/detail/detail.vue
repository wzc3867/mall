<!-- 详情页面开发 -->
<template>
  <div id="detail">
     <MainNavBar bckcolor="#FFF">
      <div slot="left" class="backBox">
         <div class="backImg" ></div>
      </div>
      <div class="Nav" slot="middle">
          <div class="title active">商品</div>
          <div class="title">参数</div>
          <div class="title">评论</div>
          <div class="title">推荐</div>
      </div>
     </MainNavBar>
  </div>
</template>

<script>
import MainNavBar from "../../components/common/navBar/navBar.vue"
export default {

  data () {
    return {
    };
  },

  components: {
    MainNavBar
  },

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
#detail{
    z-index: 10;
    background-color:#fff;
    height:100vh
}
.backImg{
  background: url('../../assets/img/common/back.svg');
  width: 1.5rem;
  height: 1.5rem;
  background-size: 100%;
  line-height: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.backBox{
  width:100%;
  height:100%;
  position: relative;
}
.Nav{
  width:100%;
  height:100%;
   display:flex;
   color:#333;
   font-weight: 500;
   font-size:.9rem
}
.title{
  flex: 1;
}
.active{
  color:@color-tint;
}
</style>