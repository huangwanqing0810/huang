<template>
  <div>
    <ul>
      <!-- 传过来的num=3.5  -->
      <!-- 因为有五颗星 所以循环1-5次 -->
       <li v-for="i in 5" :key="i" :class="{
         'active':i<=num,
         'half-active': ((i-num)>0)&&((i-num)<1),
         'unactive':i>Math.ceil(num)


       }"></li>


      <!-- <li class="active"></li>
      <li class="half-active"></li>
      <-- <li v-for="i in 5" :key="i" class="unactive">{{i}}</li> -->
      <!-- <li class="unactive"></li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      num:{
        // type:Number,//默认是number类型
        default:5//默认是五颗星
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul{
    display: flex;
  }
  ul li{
    height: 12px;
    width: 12px;
    background-size: 12px 12px;
  }
  .active{
    background-image: url(./images/star-active.png);
  }
  .half-active{
    background-image: url(./images/star-half.png);
  }
  .unactive{
    background-image: url(./images/star.png);
  }
</style>