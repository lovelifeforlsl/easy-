<template>
  <div id="app">
    <div class="scroll">   
      <router-view></router-view>
    </div>
    <!-- 下方tapbar -->
    <!-- <div class="tapbarbox">     
      <ul>
        <li>
          <router-link tag="div" to="/bookshell" exact>
            <div class="iconfont icon-tushuqikan menu"></div>
            <span>书架</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/" exact>
            <div class="iconfont icon-shangcheng menu"></div>
            <span>书城</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/community" exact>
            <div class="iconfont icon-shequ menu"></div>
            <span>社区</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/discover" exact>
            <div class="iconfont icon-faxian menu"></div>
            <span>发现</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/mine" exact>
            <div class="iconfont icon-shenfenzheng-tianchong menu"></div>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div> -->


  </div>
</template>

<script>
export default {
  // methods:{
  //   _initMainScroll() {
  //     this.$nextTick(() => {
  //         // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
  //         if (!this.typeScroll) {
  //           // 避免页面多次实例化BScroll引起内存泄漏
  //           this.typerScroll = new BScroll(this.$refs.box, {
  //             // scrollY: true, // 让滑动容器横轴滚动
  //             click: true
  //           });
  //         } else {
  //           this.typerScroll.refresh();
  //         }
  //     });
  //   },
  // },
  mounted() {
    // this.$http("/cats/lv2/statistics").then(res => console.log("data", res));
    // this.$http("/ranking/gender").then(res => console.log("data", res));

    // /"/cats/lv2/statistics
    // this._initMainScroll();
  }

};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #777c83;
      // padding-bottom: 60px;
}

.router-link-exact-active {
  color: rgb(170, 42, 25);
}

// .tapbarbox {
//   width: 100%;
//   height: 60px;
//   background-color: aliceblue;
//   position: fixed;
//   bottom: 0px;
//   left: 0px;
//   font-size: 0.36rem;
// }

// .tapbarbox > ul {
//   display: flex;
//   height: 100%;

//   li {
//     flex: 1;
//     padding-top: 0.3rem;
//   }

//   .menu {
//     position: relative;
//     font-size: 0.65rem;
//   }
// }

// .scroll {
//     padding-bottom: 60px;
// }
</style>
