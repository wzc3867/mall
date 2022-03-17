<!-- GoodList列表 -->
<template>
  <div id="goodlist">
      <ul class="ListBox" >
          <li v-for="(item, index) in GoodData" :key="index">
            <img src="item.show.img" alt="">
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

    }
</style>