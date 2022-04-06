<!-- 店铺描述组件 -->
<template>
  <div id="shopBox">
    <div>
        <div class="shoplogo">
            <div class="logoBox">
                <img :src="goodData.shopInfo.shopLogo" alt="" class="logo">
            </div>
            <div class="shopName">{{goodData.shopInfo.name}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodData:{
        required: true,
        default:{}
    }
  },
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
.shoplogo{
    display:flex;
    position: relative;
}
.logo{
    width:3rem;
    height:3rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-57%);
}
.logoBox{
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    border: 1px #ccc solid;
    margin-top: 1rem;
    position: relative;
    margin-left: 1rem;
}
.shopName{
    position:absolute;
    left:5.5rem;
    top: 50%;
    font-size: 1.3rem;
    transform:translateY(-50%);
    color: #666;
}
</style>