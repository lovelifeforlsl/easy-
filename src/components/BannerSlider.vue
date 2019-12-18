<template>
  <div>
    <div class="Sliderbox">
      <ul>
        <transition-group name="slider" v-if="datatype.sliderpic">
          <li v-show="currentindex==ele.id" v-for="(ele) in datatype.sliderpic" :key="ele.id">
            <img class="auto-img" :src="ele.url" alt />
          </li>
        </transition-group>
      </ul>
    </div>
    <div v-if="datatype.subprojec" class="typechoosebox">
      <ul>
        <li   @click="opendcategory(ele.title)" v-for="(ele,i) in datatype.subprojec" :key="i">
          <div class="iconfont icon" :class="ele.icon"></div>
          <span>{{ele.title}}</span>
        </li>
      </ul>
    </div>
    <ComponentSpace />  
    <MainSuggest :datatype="datatype" />
    <ComponentSpace />

    <div class="rankingbox" ref="ranking">
      <ul style="width: 500%">
        <li class="typerankingli">
          <div>
            <img
              class="auto-img"
              src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/bf881b81bd6da62fc757a99ae22006f9.jpg"
              alt
            />
          </div>
          <div class="typeranking">
            <ul>
              <li class="typerankingbooks" v-for="(ele,index) in maelchangxiaodata" :key="index">
                <span class="icongold">
                  <img class="auto-img" :src="icon[index]" alt />
                  <span v-if="index>2">{{index+1}}</span>
                </span>
                <span>{{ele.title}}</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="typerankingli">
          <div>
            <img
              class="auto-img"
              src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/bf881b81bd6da62fc757a99ae22006f9.jpg"
              alt
            />
          </div>
          <div class="typeranking">
            <ul>
              <li class="typerankingbooks" v-for="(ele,index) in maelchangxiaodata" :key="index">
                <span class="icongold">
                  <img class="auto-img" :src="icon[index]" alt />
                  <span v-if="index>2">{{index+1}}</span>
                </span>
                <span>{{ele.title}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div v-for="(item,id) in datatype.subsuggest" :key="id">
      <!-- <h2>{{item}}</h2> -->
      <ComponentSpace/>
      <SubSuggest :datatype="item"></SubSuggest>
    </div>
  </div>
</template>

<script>
import ComponentSpace from "../components/ComponentSpace";
import MainSuggest from "../components/MainSuggest";
import SubSuggest from "../components/SubSuggest";
import BScroll from "better-scroll";
export default {
  props: ["datatype"],
  data: () => ({
    currentindex: 0,
    maelchangxiaodata: [],
    femaechangxiaodata: [],
    maelzuiredata: [],
    femaezuiredata: [],
    icon: [
      require("../icon/1.png"),
      require("../icon/2.png"),
      require("../icon/3.png")
    ]
  }),
  watch: {
    datatype(newval) {
      // console.log(newval,123)
      clearInterval(this.timer);
      if (newval.sliderpic.length) {
        //监听网络请求导数据,并且当前商家有supports优惠后
        // 先清空上一次轮播计时器
        clearInterval(this.timer);
        this.$nextTick(() => {
          // 数据更新重新渲染页面完毕
          this.timer = setInterval(() => {
            // 开始轮播
            this.currentindex++;
            // console.log(this.currentindex);
            if (this.currentindex >= newval.sliderpic.length) {
              this.currentindex = 0;
            }
          }, 3000);
        });
      }
      // console.log(this.currentindex);
    }
  },
  components: {
    ComponentSpace,
    MainSuggest,
    SubSuggest,
  },
  methods: {
    _initScroll() {
      if(this.maelchangxiaodata){
      this.$nextTick(() => {
        // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        if (!this.rankingtyperScroll) {
          // 避免页面多次实例化BScroll引起内存泄漏
          this.rankingtyperScroll = new BScroll(this.$refs.ranking, {
            // scrollY: true, // 让滑动容器横轴滚动
            click: true,
            scrollX: true
          });
          console.log(this.$refs.ranking,this.$refs,134);
        } else {
          this.rankingtyperScroll.refresh();
        }
      });
      }

    },
    opendcategory(title){

         if(title=='分类'){
         console.log('title',title)
         this.$router.push({path:'/bookcategory'})
         }
         
    }
  },
  mounted() {
    // this.$http("/cats/lv2/statistics").then(res => console.log("data", res));
    // this.$http("/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20").then(res => console.log("排行data", res));
    //男生畅销榜
    this.$http(`/ranking/5a6844aafc84c2b8efaa6b6e`).then(res => {
      this.maelchangxiaodata = res.data.ranking.books;
      this.maelchangxiaodata = this.maelchangxiaodata.splice(0, 5);
      console.log("maelchangxiaodata==>", this.maelchangxiaodata);
      this._initScroll();
    });
  },

};
</script>

<style lang="scss" scoped>
.auto-img {
  width: 100%;
  display: block;
}

.clean {
  overflow: hidden;
}

.Sliderbox {
  //   height: 3rem;
  position: relative;
  overflow: hidden;
  margin: 0 0.5rem;
  height: 3.7rem;
  padding-bottom: 0.4rem;

  ul {
    width: 600%;
    white-space: nowrap;
    position: relative;
    height: 100%;

    li {
      position: absolute;
      top: 0px;
      left: 0px;
      display: inline-block;
      width: calc(100% / 6);
    }
  }
}

.typechoosebox {
  padding: 0.2rem 0.5rem 0.6rem;

  ul {
    display: flex;
    width: 100%;

    li {
      flex: 1;
    }

    span {
      font-size: 0.28rem;
    }

    .icon {
      margin-bottom: 0.25rem;
      font-size: 0.7rem;
    }

    .fenlei {
      color: rgb(0, 110, 255);
    }

    .paihangbang {
      color: rgb(76, 235, 76);
    }

    .books {
      color: rgb(235, 95, 76);
    }

    .dashen {
      color: rgb(235, 76, 214);
    }

    .bangzhu {
      color: rgb(235, 211, 76);
    }
  }
}

.rankingbox {
  padding: 0.6rem 0.5rem;
  overflow: hidden;

  ul {
    text-align: left;
    // &::after {
    //   clear: both;
    // }

    .typerankingli {
      display: inline-block;
      width: 6.5rem;
      border: 1px solid rgba(7, 17, 27, 0.1);
      box-shadow: 2px 1px 18px rgba(7, 17, 27, 0.3);
      margin-right: 0.5rem;
    }

    .typerankingbooks {
      padding: 0.3rem 0.5rem;
      font-size: 0.34rem;
      color: rgba(0, 0, 0, 0.815);
      font-weight: 500;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }

    .icongold {
      display: inline-block;
      width: 0.5rem;
      margin-right: 0.2rem;
      vertical-align: top;
      text-align: center;
      font-weight: bold;
    }
  }
}

.slider-enter {
  transform: translateX(100%);
}

.slider-enter-active,
.slider-leave-active {
  transition: all 1s linear;
}

.slider-enter-to,
.slider-leave {
  transform: translateX(0);
}

.slider-leave-to {
  transform: translateX(-100%);
}
</style>