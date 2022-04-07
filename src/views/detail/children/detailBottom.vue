<!-- 详情页面底部按钮 -->
<template>
  <div id="detailBottom">
    <div class="kefu">
        <i class="icon"></i>
    </div>
    <div class="shop"></div>
    <div class="collect"></div>
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
}
.kefu{
    flex: 1;
    background-color: red;
}
.shop{
    flex: 1;
    background-color:green;
}
.collect{
    flex: 1;
    background-color:orange;
}
.shoppingCar{
    flex: 2;
    background-color:aqua
}
.Buying{
    flex: 2;
}
</style>