<!-- 详情页面底部按钮 -->
<template>
  <div id="detailBottom">
    <div class="kefu">
        <i class="icon serve"></i>
        <div class="text">客户</div>
    </div>
    <div class="shop">
       <i class="icon shopIcon"></i>
        <div class="text">店铺</div>
    </div>
    <div class="collect">
        <i class="icon"></i>
        <div class="text">收藏</div>
    </div>
    <div class="shoppingCar">加入购物车</div>
    <div class="Buying">购买</div>
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
#detailBottom{
    display: flex;
    width: 100%;
    background-color: #fff;
    height:48px
}
.kefu{
    flex: 1;
    // background-color: red;
}
.icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
    background-size: 100%
}
.text{
  text-align: center;
  font-size: .5rem;
}
.serve{
  background-position: 0 -54px;
}
.shopIcon {
  background-position: 0 -98px;
}
.shop{
    flex: 1;
  
}
.collect{
    flex: 1;
    // background-color:orange;
}
.shoppingCar{
    flex: 2;
    background-color:#ffe817;
    line-height:48px;
    text-align: center;
    font-size:.9rem;
}
.Buying{
    flex: 2;
    background-color: #f69;
    line-height:48px;
    text-align: center;
    font-size:.9rem;
    color:#fff
}
</style>