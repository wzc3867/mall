<template>
  <div class="tabItem">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabarItem",
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
  .tabItem{
    flex:1;
    text-align:center;
  }
</style>