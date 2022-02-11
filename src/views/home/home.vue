<!--  -->
<template>
  <div>
      <MainSwiper :swiperimg="bannerImg"></MainSwiper>
  </div>
</template>

<script>
import MainSwiper from '../../components/content/Swiper/MainSwiper.vue'
import { getHomeData,getHomeMultipleData } from '../../network/home';
export default {
  created() {
    // 请求多条数据回来
    this.getHomeMultiple();
  },
  data () {
    return {
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        banner:[],
        recommend:{}
    };
  },

  components: {
    MainSwiper
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
</style>