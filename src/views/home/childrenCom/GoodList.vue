<!-- GoodList列表 -->
<template>
  <div id="goodlist">
      <ul class="ListBox" >
          <li v-for="(item, index) in GoodData" :key="index" class="imgBox">
              <!-- {{item}} -->
            <img :src="item.show.img">
    
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
      setTimeout(()=>{
          this.goodLst = this.GoodData
      },200)
  },

  computed: {},

  methods: {}
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
        background-color:red;
        // height: 100px;
        width: 50%;
    }
    .imgBox img {
        width: 100%;
        height: 100%;
    }
</style>