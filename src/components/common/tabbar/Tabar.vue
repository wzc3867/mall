<template>
<div class="TabBox">
    <slot></slot>
</div>
</template>
<script>
// import TabItem from "../tabbar/TabarItem.vue"
export default {
  name: "Tarbar",
  data () {
    return {
    };
  },
  components:{
    //   TabItem
  }
}
</script>
<style scoped>
    .TabBox{
        background-color: #f6f6f6;
        height: 8vh;
        display: flex;
        position: fixed;
        bottom: 0;
        /* align-items: center; */
        width: 100%;
    }
    .tabItem{
        text-align: center;
        flex: 1;
    }
</style>