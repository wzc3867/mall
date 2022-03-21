<!--  -->
<template>
     <div id="home">
        <Scroll class="wrap" @pullingUp="reshData" ref="scrollWrap">
        <div>
        <MainSwiper :swiperimg="bannerImg"></MainSwiper>
        <recommend :recomimg="recommend"></recommend>
        <FeatureView></FeatureView>
        <GoodListNav :NavData="GoodNav" @NavIndex="Navchange"></GoodListNav>
        <GoodList :GoodData="displayList"></GoodList>
        </div>
      </Scroll>
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
        goodsList:[{page: 1, list: []},{page: 1, list: []},{page: 1, list: []}],
        displayList:[],
        banner:[],
        recommend:{},
        GoodNav:["流行","新款","精选"],
        GoodNavNum:['pop',"new","sell"],
        NavIndex:0
    };
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
    async getHomeData(type, page) {
      // getHomeData(type, page).then(res => {
      //   this.
      // })
      const res = await getHomeData(type, page);
      const index =  this.getType(type);
      console.log(index)
      this.goodsList[index].list.push(...res.data.data.list);
      this.displayList = this.goodsList[index].list;
      console.log(this.displayList); 

    },
    getHomeMultiple(){
      getHomeMultipleData().then(res => {
        // console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      })
    },
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
    async reshData(){
     this.goodsList[this.NavIndex].page++;
      await this.getHomeData(this.GoodNavNum[this.NavIndex],this.goodsList[this.NavIndex].page);
     this.$refs.scrollWrap.scroll.finishPullUp();
     this.$refs.scrollWrap.scroll.refresh();
    //  this.$refs.scrollWrap.refresh();
    // console.log(this.$refs.scrollWrap.scroll.refresh());
    },
    Navchange(index){
      this.NavIndex = index;
      console.log(this.GoodNavNum[this.NavIndex]);
      console.log(this.goodsList[this.NavIndex].page);
      this.getHomeData(this.GoodNavNum[this.NavIndex],this.goodsList[this.NavIndex].page)
    }
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
</style>