<!-- 详情页面开发 -->
<template>
  <div id="detail">
    <!-- 顶部NavBar组件 -->
     <MainNavBar style="background-color: #FFF">
      <div slot="left" class="backBox" @click="goBack">
         <div class="backImg" ></div>
      </div>
      <div class="Nav" slot="middle">
          <div :class="[TabClass,currentIndex==index?Active:'']" v-for="(item,index) in NavTab" :key="index" @click="changeNav(index)">{{item}} 
          </div>
      </div>
     </MainNavBar>
     <Scroll class="wrap">
       <div>
           <!-- 轮播组件 -->
        <DetailSwiper  :swiperimg="goodsClass.swiperImg"></DetailSwiper>
        <!-- 价格组件 -->
        <DetailIntro :goodsData="goodsClass" class="IntroBorder"></DetailIntro>
        <!-- 店铺组件 -->
        <ShopDetail :goodData="goodData" class="shopDetail"></ShopDetail>
        <!-- 详情组件 -->
        <BriefIntro :Intro="goodData.detailInfo.desc"></BriefIntro>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
       </div>
     </Scroll>
     <!-- 详情底部按钮 -->
     <DeatilBottom class="Bottom"></DeatilBottom>
  </div>
</template>

<script>
// 引入顶部NavBar的组件
import MainNavBar from "../../components/common/navBar/navBar.vue"
// 引入swiper组件
import DetailSwiper from '../detail/children/detailSwiper.vue'
// 引入店铺描述组件
import ShopDetail from '../detail/children/shopdetail.vue'
// 引入DetailIntro
import DetailIntro from "./children/detailIntro.vue"
// 引入底部组件
import DeatilBottom from './children/detailBottom.vue'
// 引入详情介绍的组件
import BriefIntro from './children/briefInt.vue' 
// 引入封装的滚动组件
import Scroll from "../../components/common/scroll/scroll.vue"
//引入detail得网络请求方法
import {getDetail,Goods} from "../../network/detail"

export default {

  data () {
    return {
      NavTab:["商品","参数","评论","推荐"],
      currentIndex:0,
      TabClass:"TabClass",//绑定式加载tabclass样式
      Active:"active",//动态绑定激活样式
      id:'',//传捡来得id值
      goodsClass:null,
      goodData:null
    };
  },
  created(){
    this.id = this.$route.query.id;
  },
  mounted() {
    console.log(233);
  },
  components: {
    MainNavBar,
    DetailSwiper,
    DetailIntro,
    ShopDetail,
    Scroll,
    DeatilBottom,
    BriefIntro
  },

  computed: {},

  activated(){
    this.getDetailData();
  },

  methods: {
    changeNav(index){
      this.currentIndex = index;
    },
    goBack() {
      this.$router.go(-1);
    },
    async getDetailData() {
      const res = await getDetail(this.id);
      const data = res.data.result;
      console.log(data);
      this.goodsClass = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      this.goodData = data;
      // console.log(this.goodsClass.swiperImg);
    }
  }
}

</script>
<style lang='less' scoped>
#detail{
    z-index: 10;
    background-color:#fff;
    height:100vh;
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
.TabClass{
  flex: 1;
}
.active{
  color:@color-tint;
}
.IntroBorder{
  border-bottom: .4rem #f2f5f8 solid;
  padding-bottom:1rem;
}
.wrap{
  // height:500px;
  height:calc(100vh - 48px - 49px);
  overflow: hidden;
}
.Bottom{
  position:fixed;
  bottom:0
}
.shopDetail{
border-bottom: .4rem #f2f5f8 solid;
  padding-bottom:2rem;
}
</style>