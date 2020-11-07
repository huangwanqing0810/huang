<template>
    <div>
        <ul class="list-box">
            <!-- 动态属性v-bind绑定 省略写就是： -->
            <li v-for="obj in cateList" :key="obj.id" class="list">
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                cateList:[]
            }

        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{
                // axios返回的数据 res.data
                console.log(res.data)
                let result = res.data;
                if(result.errcode == 200){
                    this.cateList = result.data;
                }
            }).catch((error)=>{
                console.log(error)
            })
        }

        
    }
</script>

<style lang="scss" scoped>
.list-box{
    display: flex;
    flex-wrap: wrap;
}
.list{
    // 一个小图标占百分之20  一行五个
    width: 20%;
    text-align: center;
    margin-top: 0.3rem;
}
.list img{
    width: 60%;
}

</style>