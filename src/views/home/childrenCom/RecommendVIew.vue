<template>
    <div class="recommend">
      <div>
        <ul class="recBox">
          <li v-for="(item,index) in recomimg" :key = "index" >
            <a :href="item.link">
              <img :src="item.image" alt="" class="recimg">
            </a>
            <div class="rectitle">{{item.title}}</div>
          </li>
        </ul>
      </div>
      <div class="bot-line"></div>
    </div>
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
  mounted(){
    setTimeout(() =>{
       console.log(this.recomimg);
    },300)
  }
 
}
</script>
<style lang="less" scoped>
  .recBox{
    display:flex;
    justify-content:center;
    margin-top: .7rem;
    
  }
  .recBox li {
    .pxToVW(80);
    .pxToVW(80,height);
    // background-color: red;
    margin-left: .5rem;
    border-radius: 21vw;
  }
   .recimg {
     width: 100%;
     height: 100%;
   }
   .rectitle{
     font-size:.8rem;
     margin-top:.4rem;
     text-align: center;
   }
   .bot-line{
     margin-top: 3rem;
      border-bottom: .7rem solid #eeeeee;
   }
</style>