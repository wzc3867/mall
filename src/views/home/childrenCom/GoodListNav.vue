<template>
    <div id="Nav">
        <ul class="NavBox">
            <li  v-for="(item,index) in NavData" :key="item" class="Navitem"  @click="changeNav(index)">
                <span :class="{active: currentIndex === index}">{{item}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "GoodListNav",
  props: {
    NavData:{
        type:Array,
        default:[]
    }
  },
  data () {
    return {
        currentIndex:0
    };
  },
  methods: {
      changeNav (index){
          this.currentIndex = index;
        //   console.log(index);
      }
  }
}
</script>
<style lang="less" scoped>
.NavBox{
    display:flex;
    height:5.5vh;
    // background-color:red;
    line-height:5.5vh
    
}
.Navitem{
    flex: 1;
    text-align:center;
    font-size:15px;
}
.active{
    border-bottom: @color-tint 3px solid;
    color:  @color-tint;
    padding:2px
}
</style>