<!--  -->
<template>
     <div id="home">
       <GoodListNav :NavData="GoodNav" @NavIndex="Navchange" v-show="Isshow"></GoodListNav>
        <Scroll class="wrap" @pullingUp="reshData" ref="scrollWrap" @scroll="Watchdistance" >
        <div>
        <MainSwiper :swiperimg="bannerImg"></MainSwiper>
        <recommend :recomimg="recommend"></recommend>
        <FeatureView></FeatureView>
        <GoodListNav :NavData="GoodNav" @NavIndex="Navchange" ref="GoodNav" v-show="scollNav"></GoodListNav>
        <GoodList :GoodData="displayList"></GoodList>
        </div>
      </Scroll>
      <div @click="backTop">
        <img src="../../assets/img/common/top.png" alt="" class="backTop" v-show="backShow">
      </div>
      <!-- <MainTabBar/> -->
     </div>

</template>

<script>
import MainSwiper from '../../components/content/Swiper/MainSwiper.vue'
import recommend from '../../views/home/childrenCom/RecommendVIew.vue'
import FeatureView from '../../views/home/childrenCom/FeatureView.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
import GoodListNav from '../home/childrenCom/GoodListNav.vue'
import GoodList from '../home/childrenCom/GoodList.vue'
import { getHomeData,getHomeMultipleData } from '../../network/home';
export default {
  created() {
    // 请求多条数据回来
    this.getHomeMultiple();
    // 请求homeBar数据
    this.getHomeData(this.GoodNavNum[0],this.goodsList[0].page);
  },


  data () {
    return {
        // goodsList: {
        //   'pop': {page: 1, list: []},
        //   'new': {page: 1, list: []},
        //   'sell': {page: 1, list: []}
        // },
        // 0为pop, 1为new, 2为sell
        goodsList:[{page: 1, list: []},{page: 1, list: []},{page: 1, list: []}],//保存商品展示所有数据
        displayList:[],//要展示的商品列表
        banner:[],//推荐页
        recommend:{},
        GoodNav:["流行","新款","精选"],
        GoodNavNum:['pop',"new","sell"],
        NavIndex:0,//判断nav目前那个被激活
        Isshow:false,//是否显示吸顶Nav标志位
        NavTop:0,//保存SColl内到顶部距离的标志位
        scollNav: true,//判断scoll内标志位是否隐藏
        backShow:false,//是否显示返回到顶部按钮标志位
        leaveY:0
    };
  },
     activated(){
      this.$nextTick(() => {
      console.log(this.leaveY);
      this.$refs.scrollWrap.scroll.scrollTo(0,this.leaveY,0);
      this.$refs.scrollWrap.scroll.refresh();
    })
  },
    deactivated(){
    this.leaveY = this.leaveY;

    // this.leaveY = this.leaveY;
  },
  components: {
    MainSwiper,
    recommend,
    FeatureView,
    Scroll,
    GoodListNav,
    GoodList
  },

  computed: {
    bannerImg(){
      return this.banner
    }
  },

  methods: {
    // 拿到商品数据的接口
    async getHomeData(type, page) {
      // getHomeData(type, page).then(res => {
      //   this.
      // })
      const res = await getHomeData(type, page);
      const index =  this.getType(type);
      // 将请求回来的商品列表跟原有的进行拼接和保存
      this.goodsList[index].list.push(...res.data.data.list);
      this.displayList = this.goodsList[index].list;
      // console.log(this.displayList); 
      //获取goodNav距离顶部得值 
       this.$nextTick(() => {
       this.NavTop = this.$refs.GoodNav.$el.offsetTop;
    })

    },
    getHomeMultiple(){
      getHomeMultipleData().then(res => {
        // console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      })
    },
    // 判断要跟接口请求哪一个类型数据
    getType(type){
      switch(type){
        case 'pop':
          return 0;
          break;
        case 'new':
          return 1;
          break;
        case 'sell':
          return 2;
          break;
      }
    },
    // 刷新后请求新的数据
    async reshData(){
     this.goodsList[this.NavIndex].page++;
      await this.getHomeData(this.GoodNavNum[this.NavIndex],this.goodsList[this.NavIndex].page);
     this.$refs.scrollWrap.scroll.finishPullUp();
     this.$refs.scrollWrap.scroll.refresh();
    //  this.$refs.scrollWrap.refresh();
    // console.log(this.$refs.scrollWrap.scroll.refresh());
    },
    // 判断点击了哪个NAV的
    Navchange(index){
      this.NavIndex = index;
      console.log(this.GoodNavNum[this.NavIndex]);
      console.log(this.goodsList[this.NavIndex].page);
      this.getHomeData(this.GoodNavNum[this.NavIndex],this.goodsList[this.NavIndex].page)
    },
    // 监听滑动的距离
    Watchdistance(dis){
      // 判断NAV是否要吸顶
      if(dis.y<-this.NavTop) {
        this.Isshow = true;
        this.scollNav = false;
      } else {
        this.Isshow = false;
        this.scollNav = true;
      }
      // 判断回到顶部图标是否要回显
      if(dis.y < -1000) {
        this.backShow = true;
      } else {
        this.backShow = false;
      }
      this.leaveY = dis.y
    },
    backTop() {
      // 点击按钮返回到顶部
      this.$refs.scrollWrap.scroll.scrollTo(0,0,300)
    },
    // distanceEnd(dis) {
    //   console.log(dis);
    //   this.leaveY = dis.y
    // }
  }
}

</script>
<style lang='less' scoped>
#home{
  height:100vh;
}
.wrap{
  // height: 100vh;
  height:calc(100%  - 8vh - 48px);
  // height:100%;
  // // height:300px;
  // background-color:red;
  // // padding-bottom: 44px;
  // margin-top: 27px;
  // z-index: 999;
  overflow:hidden;
  // margin-bottom: 48px;
  // position:absolute;
  // top:1px;
  // top:48px
  // margin-bottom: 48px;
  // width: 100px;

}
.backTop{
  width:3rem;
  height:3rem;
  position:fixed;
  bottom:9rem;
  right:0;
}
</style>