<template>
<div>
    <div class="TabBox">
        <div >
            <img src="../../../assets/img/tabbar/home.svg" alt="">
         </div>
        <div>
            <img src="../../../assets/img/tabbar/home.svg" alt="">
        </div>
        <div>
            <img src="../../../assets/img/tabbar/home.svg" alt="">
        </div>
        <div>
            <img src="../../../assets/img/tabbar/home.svg" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "Tarbar",
  data () {
    return {
    };
  }
}
</script>
<style>
    .TabBox{
        background-color: #f6f6f6;
        height: 8vh;
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>