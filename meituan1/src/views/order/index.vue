<template>
  <div class="order-container">
    <!-- 左侧分类 -->
    <!-- 外层父元素 高度固定 -->
    <div class="cate-box">
      <ul>
        <li
          :class="{ active: index == currentIndex, 'cate-list': true }"
          v-for="(obj, index) in nav"
          @click="change(index)"
          :key="obj.id"
        >
          {{ obj.name }}
        </li>
      </ul>
    </div>

    <!-- 右侧商品 -->
    <!--  -->
    <div class="pro-box">
      <div>
        <!-- 第一次循环goods取到八个对象 取到goods的name  -->
        <!-- 在每次goods的循环里 再循环content 取到商品 -->
        <div class="prod-cate-box" v-for="(obj, typeIndex) in goods" :key="typeIndex">
          <h2>{{ obj.name }}</h2>
          <ul>
            <li class="prod-list" v-for="(prod,index) in obj.content" :key="prod.id">
              <img class="prod-img" :src="prod.img" alt />
              <div>
                <p>{{ prod.name }}</p>
                <p>{{ prod.price }}</p>
              </div>
              <div class="add-cart">
                <span class="iconfont icon-xianxingtubiaozhizuomoban-02" v-if="prod.count >0"></span>
                <span class="num">{{prod.count}}</span>
                <span class="iconfont icon-jiahao" @click="$store.commit('add',{typeIndex,index})"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      currentIndex: 0,
      scrollY: 0, //prodScroll 滚动的高度
      pos: [], //记录所有分类div的位置prod-cate-box
    };
  },
  methods: {
    // 当点击左侧分类时 右侧滚动
    change(index) {
      // 获取到跟index索引对应的 .prod-cate-box
      let prodCateList = document.getElementsByClassName("prod-cate-box");
      console.log(prodCateList[index]);
      // ele 元素  为了有点动画效果 加上了300延迟
      this.prodScroll.scrollToElement(prodCateList[index], 300);
      this.currentIndex = index;
    },
    getPos() {
      let prodCateList = document.getElementsByClassName("prod-cate-box");
      let H = 0;
      for (let i = 0; i < prodCateList.length; i++) {
        if (i == 0) {
          this.pos.push(0);
        } else {
          H += prodCateList[i - 1].offsetHeight;
          this.pos.push(H);
        }
      }
      console.log(this.pos);
    },
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
        // vuex中存储商品 调用vuex中mutation中的方法
        this.$store.commit('save',this.goods);

        // 渲染到页面后 ->new BetterScroll
        this.$nextTick(() => {
          this.cateScroll = new BetterScroll(".cate-box", {
            click: false,
            bounce: false,
          });
          this.prodScroll = new BetterScroll(".pro-box", {
            click: false,
            bounce: false,
            probeType: 3,
          });
          this.prodScroll.on("scroll", (position) => {
            this.scrollY = Math.abs(position.y);
            console.log(this.scrollY);
          });
          // 计算每个分类的位置
          this.getPos();
        });
      });
  },
  watch: {
    scrollY(val) {
      let cateList = document.querySelectorAll(".cate-list");
      for (let index = 0; index < this.pos.length; index++) {
        let pos1 = this.pos[index];
        let pos2 = this.pos[index + 1];
        if (val >= pos1 && val < pos2) {
          this.currentIndex = index;

          this.cateScroll.scrollToElement(cateList[index], 300)
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  padding-bottom: 1rem;
  .cate-box {
    // 视口高度-上44 -下50
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
      &.active {
        color: red;
      }
    }
  }
  .pro-box {
    flex: 3;
    height: calc(100vh - 94px);
    .prod-list {
      position: relative;
      display: flex;
      .prod-img {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
      .add-cart {
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        .icon-xianxingtubiaozhizuomoban-02{
          color: #e2e3e5;
          vertical-align: middle;
          font-size: 26px;
        }
        .icon-jiahao {
          color: #ffc134;
          vertical-align: middle;
          font-size: 26px;
        }
        .num {
          margin: 0 0.1rem;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>