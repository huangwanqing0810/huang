<template>
    <div>
        <detail-head></detail-head>
        <!-- 在这里使用 tab切换 -->
   <van-tabs v-model="active" animated>
      <van-tab :title="'点餐'" >
          <order></order>
      </van-tab>
      <van-tab :title="'评论'" >
        <!-- 引入评价页的组件 -->
        <comment></comment>
      </van-tab>
      <van-tab :title="'商家'" >商家页</van-tab>
    </van-tabs>
    </div>
</template>

<script>
    import DetailHead from './DetailHead'
    import Order from '@/views/order/index'
    import Comment from '@/views/comment/index'
    export default {
        data(){
            return{
                active:0//默认tab中一进去就在第一个
            }
        },
        components:{
            DetailHead,
            Comment,
            Order
        }
        
    }
</script>
    

<style lang="scss" scoped>

</style>