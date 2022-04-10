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
        <div class="shopInfo">
          <div class="Info_box">
            <div class="shopInfoItem">
            <div class="Info_Num">{{goodData.shopInfo.cSells | checkdisplayNum}}</div>
            <div class="Info_titile">总销量</div>
          </div>
          <div class="shopInfoItem">
            <div class="Info_Num">{{goodData.shopInfo.cGoods}}</div>
            <div class="Info_titile">全部宝贝</div>
          </div>
          </div>
          <div class="describe">
            <div v-for="(item,index) in goodData.shopInfo.score" :key="index">
              {{item.name}}<span class="Info_score" :class="item.isBetter?'heightColor':'lowColor'">{{item.score}}</span> <span class="Info_remark" :class="item.isBetter?'height':'low'">{{item.isBetter?'高':'低'}}</span>
            </div>
          </div>
        </div>
        <div class="IntoButtom">进店逛逛</div>
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

  methods: {},
  filters:{
    checkdisplayNum(val) {
      if(val > 10000) {
        return (val/10000).toFixed(1)+'万'
      } else {
        return val
      }
    }
  }
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
    font-size: 1.1rem;
    transform:translateY(-50%);
    color: #666;
}

.shopInfo{
  margin-left:1.5rem;
  margin-top:1rem;
  display: flex;

}
.Info_box{
  flex: 1;
  display: flex;
    border-right: 1px #ccc solid;
}
.shopInfoItem{
  text-align:center;
  margin-left:.5rem
  // justify-content:center
  // flex: 1;
  // display:inline-block;
}
.describe{
  flex: 1;
  font-size:.9rem;
  color: #333;
  margin-left: 1.5rem;
}
.Info_titile{
  font-size: .8rem;
  margin-top: .6rem;
}
.Info_Num{
  font-size: 1.2rem;
  // margin-top: .2rem;
  // text-align: center
}
.Info_score{
  display: inline-block;
  width:2rem;
  margin-left: 1.2rem;
}
.Info_remark{
  display: inline-block;
  width: 1rem;
  color: #fff;
  height: 1rem;
  width: 1rem;
  text-align: center;
}
.describe > div {
  margin-top: .6rem;
}
.describe :nth-child(1) {
  margin-top: -0.5rem;
}
.low{
    background-color:#5ea732;
}
.height{
  background-color:#f13e3a
}
.lowColor{
  color:#5ea732
}
.heightColor{
  color:#f13e3a
}
.IntoButtom{
  width:9rem;
  height:2rem;
  background-color:#f2f5f8;
  line-height:2rem;
  text-align:center;
  border-radius:.6rem;
  font-size:.8rem;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top:1rem
}
</style>