<template>
    <div>
        <!-- Head组件 -->
        <Head></Head>

        <Category></Category>

        <List></List>
    </div>
</template>

<script>/*
    1.先import引入
    2.在components中声明
    3.在template中使用
 */
    import Head from "./Head"
    import List from "./List"
    import Category from "./Category"
    export default {
        components:{
            Head,
            Category,
            List
        }
    }


</script>

<style lang="scss" scoped>


</style>