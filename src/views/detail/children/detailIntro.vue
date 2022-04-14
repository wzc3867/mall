<template>
    <div id="DetailIntro">
        <div class="title">
          {{goodsData.title}}
        </div>
        <div class="price">
            <div class="newPrice">{{goodsData.newPrice}}</div>
            <div class="oldPrice">{{goodsData.oldPrice}}</div>
            <div class="discount">{{goodsData.discount}}</div>
        </div>
        <div class="columns" v-if="goodsData.columns.length>0">
          <div  v-for="(item,index) in goodsData.columns" :key="item" class="columnsItem" :class="{'right':index == serveLength-1,'left':index == 0}">
            {{item}}
          </div>
        </div>
        <div class="services">
          <div v-for="(item,index) in goodsData.services" :key="index" class="servicesItem">
            <span class="servicesIcon"><img :src="item.icon" alt=""></span>
            <span>{{item.name}}</span>
          </div>
        </div>

    </div>
</template>
<script>
export default {
  name: "DetailIntro",
  props: {
    goodsData:{
      type: Object,
      required: true,
      serveLength:0
    }
  },
  data () {
    return {
      Intro: ""
    };
  },
  mounted () {
    this.serveLength = this.goodsData.columns.length;
    console.log(this.goodsData);
  }
}
</script>
<style lang="less" scoped>
.title{
  padding-top: 1rem;
  padding-left: 0.4rem;
  // font-size:0.9rem
}
.price{
  padding-left: 0.4rem;
  margin-top: .5rem;
  display:flex;
  position: relative;
}
.newPrice{
   color:#ff5777;
  font-size: 1.4rem;
  // position:absolute;
}
.oldPrice{
  position:absolute;
  bottom: 0;
  left: 11.5rem;
  font-size:.7rem;
  color: #999;
  text-decoration: line-through;
}
.discount{
  position: absolute;
  left:14rem;
  font-size:.5rem;
  height:1rem;
  width: 1.8rem;
  border-radius:.5rem;
  background-color:#ff5777;
  text-align: center;
  line-height:1rem;
  color: #fff;
  font-weight:600
}
.columns{
  display:flex;
  margin-top: 1.5rem;
  border-bottom: #f2f5f8 .2rem solid;
  padding-bottom:.5rem
}
.columnsItem{
  flex: 1;
  font-size:.8rem;
  color:#999;
  margin-left: .5rem;
  text-align: center;
}
.right{
  text-align: right;
  margin-right: 1rem;
}
.left{
  text-align: left;
}
.services{
  display:flex;
  font-size:.6rem;
  margin-top: .4rem;
  // justify-content: center;
}
.servicesIcon{
  display:inline-block;
  width: .5rem;
  height: .5rem;
}
.servicesIcon img {
  width: 100%;
  height: 100%;
}
.servicesItem{
  // margin-left:   .3rem;
  text-align: center;
  flex: 1
}
</style>