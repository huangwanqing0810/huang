<template>
  <div class="container">
    <p>wawayaya</p>
    <h2>haha</h2> 
    <router-link to="/vuex">vuex</router-link>
    <router-view> </router-view>
  </div>
 
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// scoped 作用域 当前组件生效
.container {
  h2 {
      background-color: blue;
  }
  p{
      background-color:pink;
  }
}
</style>