<template>
  <div>
    <div ref="box" style="height:calc(100vh - 60px)">
      <div class="box">
        <div class="navbox">
          <div>
            <span class="fl">书城</span>
            <div class="fr">
              <i class="menu iconfont icon-siyecao"></i>
              <span>分类</span>
            </div>
          </div>
        </div>
        <div class="searchbox">
          <div class="search">
            <div class="serchicon iconfont icon-zhenhuichongtubiaozhizuo-kuozhan-"></div>
            <input class="input" type="text" />
          </div>
        </div>

        <div class="classifybox">
          <div class="sellerSlider" ref="sellerSlider">
            <ul class="classifyul" :style="{width:'10rem'}">
              <li
                v-for="(item,index) in type"
                :key="index"
                :class="{'classifyactive':item.type==typestr}"
                @click="changetypestr(item.type)"
              >{{item.title}}</li>
            </ul>
          </div>
          <span class="classifymenu iconfont icon-sangedian"></span>
        </div>
        <BannerSlider :datatype="datatype" />
      </div>
    </div>
    <TapBar />
  </div>
</template>

<script>
import BScroll from "better-scroll";
import BannerSlider from "../components/BannerSlider";
import TapBar from "../views/TapBar";
export default {
  name: "BookMall",
  data: () => ({
    type: [],
    typestr: "jingxuan",
    datatype: {}
  }),
  components: {
    BannerSlider,
    TapBar
  },
  methods: {
    getTypeData() {
      this.$http("/bookmall").then(res => {
        console.log("res==>", res);
        let { data } = res.data;
        this.type = data.type;
        // console.log(this.type)
      });
    },
    _initMainScroll() {
      this.$nextTick(() => {
        // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        if (!this.typeScroll) {
          // 避免页面多次实例化BScroll引起内存泄漏
          this.typerScroll = new BScroll(this.$refs.box, {
            // scrollY: true, // 让滑动容器横轴滚动
            click: true
          });
        } else {
          this.typerScroll.refresh();
        }
      });
    },

    _initSellerSliderScroll() {
      this.$nextTick(() => {
        if (this.type) {
          // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
          if (!this.typeScroll) {
            // 避免页面多次实例化BScroll引起内存泄漏
            this.typerScroll = new BScroll(this.$refs.sellerSlider, {
              scrollX: true, // 让滑动容器横轴滚动
              click: true
            });
          } else {
            this.typerScroll.refresh();
          }
        }
      });
    },
    changetypestr(str) {
      this.typestr = str;
      this.$http("/bookmall").then(res => {
        let { data } = res.data;
        this.datatype = data[str];
        console.log(str);
      });

      // let title=el.getAttribute('data-id')
    },
    initdata() {
      this.$http("/bookmall").then(res => {
        let { data } = res.data;
        this.datatype = data[this.typestr];
        // console.log(str)
      });
    }
  },
  mounted() {
    this.getTypeData();
    this._initSellerSliderScroll();
    this.initdata();
    this._initMainScroll();
    // this.$http('/api/v1/live?limit=20&offset=0').then(res => console.log('/api', res))
    // this.axios('/dmzj/recommend.json').then(res => console.log('/dmzj', res))
  },
  watch: {
    type() {
      this._initSellerSliderScroll();
      this._initMainScroll();
    }
  }
  //   beforeRouteEnter(to,from,next){
  //   console.log('routerenterto',to)
  //   console.log('routerenterfrom',from)
  //   // this._initScroll();
  //      next()
  // },
  // beforeRouteUpdate(to,from,next){
  //   console.log('routerUpdateto',to)
  //   console.log('routerUpdatefrom',from)
  //   // this._initScroll();
  //      next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('routerleaveto',to)
  //   console.log('routerleavefrom',from)
  //       // this._initScroll();
  //   next()
  // }
};
</script>


<style lang="scss" scoped>
.navbox {
  width: calc(100% - 1.4rem);
  height: calc(1.8rem - 30px);
  background-color: red;
  padding: 30px 0.7rem 0;
  color: white;
  font-size: 0.46rem;
  font-weight: 550;

  .menu {
    font-size: 0.5rem;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
    position: relative;
    top: 0.02rem;
  }
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.clean {
  overflow: hidden;
}

.searchbox {
  padding: 0.6rem 0.5rem 0.2rem;

  .search {
    width: calc(100% - 0.9rem);
    height: 100%;
    background-color: #eee;
    border-radius: 0.17rem;
    padding-left: 0.9rem;
    position: relative;

    .input {
      height: 0.9rem;
      border: 0;
      outline: 0;
      width: 100%;
      background-color: transparent;
    }
    .serchicon {
      position: absolute;
      font-size: 0.52rem;
      top: 0.18rem;
      left: 0.2rem;
    }
  }
}

.classifybox {
  padding: 0 0.5rem;
  position: relative;
  margin-bottom: 0.4rem;

  .sellerSlider {
    overflow: hidden;
    width: calc(87% - 0.3rem);
    padding: 0 0.15rem 0.2rem;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(240, 238, 234, 0.432) 100%
    );
  }

  .classifyul {
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }

  .classifymenu {
    position: absolute;
    top: 0rem;
    right: 0.7rem;
    font-size: 0.65rem;
  }

  .classifyul > li {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 0.38rem;

    &:last-child {
      margin-right: 0;
    }
    &.classifyactive {
      color: red;
    }
  }
}
</style>>