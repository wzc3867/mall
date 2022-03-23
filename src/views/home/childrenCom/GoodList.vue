<!-- GoodList列表 -->
<template>
  <div id="goodlist">
      <ul class="ListBox" >
          <li v-for="(item, index) in GoodData" :key="index" class="imgBox" @click="changDetail(index)">
              <!-- {{item}} -->
            <img :src="item.show.img">
            <div class="img-text" v-for="(items) in item.props" :key="items" >{{items}}</div>
            <div class="pricebox">
                <span class="price">￥{{item.price}}</span>
                <span class="collect"></span>
                <span class="start">{{item.cfav}}</span>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        GoodData: {
            type:Array,
            default:[],
            required:true
        }
    },
    data () {
    return {
        goodLst:[]
    };
  },
  components: {},
  mounted() {
    //   setTimeout(()=>{
    //       this.goodLst = this.GoodData
    //   },200)
    this.$nextTick(() => {
         this.goodLst = this.GoodData;
    })
  },
  computed: {
  },
  methods: {
      changDetail(index) {
          console.log(index);
        console.log(this.GoodData[index])
        this.$router.push({path:'detail', query:{id:this.GoodData[index].iid}})
      }
  }
}
</script>
<style lang='less' scoped>
    .ListBox{
        display:flex;
        flex-wrap: wrap;
        // height: 300px;
        // width: 50%;
    }
    // image {
    //     width: 50px;
    //     height:100px;
    //     background-color:red
    // }
    .imgBox{
        // background-color:red;
        // height: 100px;
        width: 50%;
        padding-top:1rem;
        // position: relative;
    }
    .imgBox img {
        width: 90%;
        height: 90%;
        margin-left:50%;
        // text-align: center;
        // position: absolute;
        // left: 50%;
        transform: translateX(-50%);
    }
    .img-text{
        // display: -webkit-box
        white-space: nowrap;
        overflow: hidden;
        font-size:12px;
        text-overflow: ellipsis;
        width:11rem;
        margin-left:.7rem;
    }
    .price{
        color:@color-tint;
        margin-left:25%;
        // transform: translateX(-70%);
    }
    .pricebox {
        font-size:.8rem;
        position: relative;
    }
    .collect::before{
        // position: absolute;
        display:inline-block;
         width: 14px;
        height: 14px;
        //  left: -15px;
        // top: 0;
        content:'';
        background: url('../../../assets/img/common/collect.svg') 0px 0.7px;
        background-size: 100% 100%;
        margin-left:0.5rem;
    }
    .start{
        // margin-left:1rem
        // position: absolute;
    }
</style>