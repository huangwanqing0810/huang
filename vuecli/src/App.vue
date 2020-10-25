<template>
  <div id="app">
    <!-- 哈哈
    <h2>dfghjk ggl; hehe</h2>
    <test></test> -->
    <router-view></router-view>
    <!-- 路由跳转传参 -->
    <!-- <router-link :to="{path:'/home',query:{id:666}}">首页 </router-link> -->
    <router-link :to="{ name: 'myHome', params: { id: 888 } }"
      >首页</router-link
    >
    <router-link to="/test">测试页面</router-link>
    <!-- to后面设置的是网页地址后面变的那个   然后去index.js去-->
    <router-link to="/test3/3">测试3</router-link>
    |
    <router-link to="/aa">测试5</router-link>
    <button @click="go()">click</button>
    <button @click="goTest()">test params传参</button>
    <button @click="goBack()">&lt;</button>
    <button @click="$router.go(-1)">&lt;</button>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    
  </div>
</template>
<script>
// 在父组件中引入子组件
// 1 引入组件 import  2 components声明 3使用
// import Test from "./views/Test";
export default {
  // components: {
  //   Test
  // },
  methods: {
    go() {
      // 跳转到首页$router
      this.$router.push("/home");
      this.$router.push("/test3/6");
    },
    goTest() {
      // 跳转到test页 ->params传参 (name)
      this.$router.push({ name: "test", params: { id: 1024 } });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  transition: transform 2s ease;
}
.fade-leave-to {
  transform: translateX(100%);
}
</style>
