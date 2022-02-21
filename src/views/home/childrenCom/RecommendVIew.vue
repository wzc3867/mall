<template>
    <div class="recommend"></div>
</template>
<script>
export default {
  name: "recommend",
   props: {
    recomimg:{
        required: true,
        default:[]
    }
  },
  data () {
    return {
    };
  },
  created (){
      console.log(this.recomimg);
  }
 
}
</script>
<style lang="scss" scoped>
</style>