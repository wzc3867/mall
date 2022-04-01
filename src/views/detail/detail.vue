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
     <!-- 轮播组件 -->
     <DetailSwiper  :swiperimg="goodsClass.swiperImg"></DetailSwiper>
     <DetailIntro></DetailIntro>
  </div>
</template>

<script>
// 引入顶部NavBar的组件
import MainNavBar from "../../components/common/navBar/navBar.vue"
// 引入swiper组件
import DetailSwiper from '../detail/children/detailSwiper.vue'

//引入detail得网络请求方法
import {getDetail,Goods} from "../../network/detail"
// 引入DetailIntro
import DetailIntro from "./children/detailIntro.vue"
export default {

  data () {
    return {
      NavTab:["商品","参数","评论","推荐"],
      currentIndex:0,
      TabClass:"TabClass",//绑定式加载tabclass样式
      Active:"active",//动态绑定激活样式
      id:'',//传捡来得id值
      goodsClass:null
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
    DetailIntro
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
</style>