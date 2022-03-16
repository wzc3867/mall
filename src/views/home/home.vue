<!--  -->
<template>
     <div id="home">
        <Scroll class="wrap">
        <div>
        <MainSwiper :swiperimg="bannerImg"></MainSwiper>
        <recommend :recomimg="recommend"></recommend>
        <FeatureView></FeatureView>
        <GoodListNav :NavData="GoodNav"></GoodListNav>
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
import { getHomeData,getHomeMultipleData } from '../../network/home';
export default {
  created() {
    // 请求多条数据回来
    this.getHomeMultiple();
    // this.getHomeData()
  },
  data () {
    return {
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        banner:[],
        recommend:{},
        GoodNav:["流行","新款","精选"]
    };
  },

  components: {
    MainSwiper,
    recommend,
    FeatureView,
    Scroll,
    GoodListNav
  },

  computed: {
    bannerImg(){
      return this.banner
    }
  },

  methods: {
    getHomeData(type, page) {
      getHomeData(type, page).then(res => {
        console.log(res);
        return res;
      })
    },
    getHomeMultiple(){
      getHomeMultipleData().then(res => {
        console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      })
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