<template>
  <div class="tabItem" @click="change">
      <div class="boxSIze" v-show="Isactive"><slot name="icon"></slot></div>
       <div class="boxSIze"  v-show="!Isactive"><slot name="activeIcon"></slot></div>
      <div :style='fontcolor'><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabarItem",
  props: {
    Link:{
      type: String,
      required:true,
      default: "/home"
    }
  },
  data () {
    return {
    };
  },
  methods:{
    change(){
     this.$router.replace(this.Link)
     console.log(this.$route);
    }
  },
  computed:{
    Isactive(){
      return this.$route.path.indexOf(this.Link) == -1
    },
    fontcolor(){
      return this.Isactive?'':'color:red'
    }
  }
}
</script>
<style lang="less" scoped>
  .tabItem{
    flex:1;
  }
  .boxSIze img{
   height: 4vh;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>