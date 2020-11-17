<template>
    <div>
        <div class="cart">
            <div class="circle">
                <span class="iconfont icon-gouwuchekong"></span>
            </div>
            <div class="free">
                <p>另需配送费{{storeMsg.fee}}</p>
            </div>
            <div class="price">
                <p>{{storeMsg.price}}元起送</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["storeMsg"]
    }
</script>

<style lang="scss" scoped>
.cart{
    height: 50px;
    background: #3b3b3c;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    .circle{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #656565;
        text-align: center;
        line-height: 50px;
        position: absolute;
        top:-10px;
        left: 10px;
        .icon-gouwuchekong{
            font-size: 28px;
            color:#c4c4c4 ;
            font-weight: 500;
        }
    }
    .free{
        flex:3;
        margin-left: 80px;
        height: 50px;
        line-height: 50px;
        color: #999;
    }
    .price{
        flex:1;
        color: #999;
        height: 50px;
        line-height: 50px;
    }
}
</style>