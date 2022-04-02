<template>
    <div id="DetailIntro">
        <div class="title">
          {{this.goodsData.desc}}
        </div>
        <div class="price">
            <div class="newPrice">{{this.goodsData.newPrice}}</div>
            <div class="oldPrice">{{this.goodsData.oldPrice}}</div>
            <div class="discount">{{this.goodsData.discount}}</div>
        </div>
        <div class="columns">
          <div  v-for="(item) in goodsData.columns" :key="item" class="columnsItem">
            {{item}}
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
    }
  },
  data () {
    return {
      Intro: ""
    };
  },
  created () {
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
}
.columnsItem{
  flex: 1;
  font-size:.8rem;
  color:#999;
 margin-left: .5rem;
}
</style>