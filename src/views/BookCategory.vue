<template>
  <div class="box">
    <div class="nav">
      <div class="return" @click="comeback">
        <span class="returnicon iconfont icon-left"></span>
        <span class="returntext">返回</span>
      </div>分类
    </div>
    <div class="content">
      <div class="leftcontent">
        <ul>
          <li
            v-for="(ele) in tag"
            :key="ele.id"
            :class="{active:currentindex==ele.id}"
            @click="choosetype(ele.id)"
          >{{ele.title}}</li>
        </ul>
      </div>
      <div class="rightcontent" ref="rightcontent" style="height:15.9rem">
        <div>
          <div>
            <div class="rightcontentnav">
              <span class="throughline"></span>
              <div class="rightcontent-title">
                <i class="iconleft"></i>
                <span>男生</span>
                <i class="iconright"></i>
              </div>
            </div>
            <ul class="categorycontent">
              <li @click="gotoinfo(ele.name,'male')" v-for="(ele,i) in malebookdata" :key="i">
                <div class="leftinfo">
                  <div class="booktitle">{{ele.name}}</div>
                  <div class="booknumber">{{ele.bookCount}} 本</div>
                </div>
                <div class="rightinfo">
                  <div class="firstimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[0]"
                      alt
                    />
                  </div>
                  <div class="secondimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[1]"
                      alt
                    />
                  </div>
                  <div class="thirdimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[2]"
                      alt
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div class="rightcontentnav">
              <span class="throughline"></span>
              <div class="rightcontent-title">
                <i class="iconleft"></i>
                <span>女生</span>
                <i class="iconright"></i>
              </div>
            </div>
            <ul class="categorycontent">
              <li @click="gotoinfo(ele.name,'female')" v-for="(ele,i) in femalebookdata" :key="i">
                <div class="leftinfo">
                  <div class="booktitle">{{ele.name}}</div>
                  <div class="booknumber">{{ele.bookCount}} 本</div>
                </div>
                <div class="rightinfo">
                  <div class="firstimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[0]"
                      alt
                    />
                  </div>
                  <div class="secondimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[1]"
                      alt
                    />
                  </div>
                  <div class="thirdimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[2]"
                      alt
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div class="rightcontentnav">
              <span class="throughline"></span>
              <div class="rightcontent-title">
                <i class="iconleft"></i>
                <span>标签</span>
                <i class="iconright"></i>
              </div>
            </div>
            <ul class="categorycontent">
              <li @click="gotoinfo(ele.name,'picture')" v-for="(ele,i) in tagbookdata" :key="i">
                <div class="leftinfo">
                  <div class="booktitle">{{ele.name}}</div>
                  <div class="booknumber">{{ele.bookCount}} 本</div>
                </div>
                <div class="rightinfo">
                  <div class="firstimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[0]"
                      alt
                    />
                  </div>
                  <div class="secondimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[1]"
                      alt
                    />
                  </div>
                  <div class="thirdimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[2]"
                      alt
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div class="rightcontentnav">
              <span class="throughline"></span>
              <div class="rightcontent-title">
                <i class="iconleft"></i>
                <span>出版</span>
                <i class="iconright"></i>
              </div>
            </div>
            <ul class="categorycontent">
              <li @click="gotoinfo(ele.name,'press')" v-for="(ele,i) in editbookdata" :key="i">
                <div class="leftinfo">
                  <div class="booktitle">{{ele.name}}</div>
                  <div class="booknumber">{{ele.bookCount}} 本</div>
                </div>
                <div class="rightinfo">
                  <div class="firstimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[0]"
                      alt
                    />
                  </div>
                  <div class="secondimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[1]"
                      alt
                    />
                  </div>
                  <div class="thirdimg">
                    <img
                      class="auto-img"
                      :src="`http://statics.zhuishushenqi.com`+ele.bookCover[2]"
                      alt
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "bookcategory",
  data: () => ({
    currentindex: 1,
    tag: [
      {
        id: 1,
        title: "男生"
      },
      {
        id: 2,
        title: "女生"
      },
      {
        id: 3,
        title: "标签"
      },
      {
        id: 4,
        title: "出版"
      }
    ],
    femalebookdata: {},
    malebookdata: {},
    tagbookdata: {},
    editbookdata: {}
  }),
  methods: {
    choosetype(id) {
      this.currentindex = id;
    },

    _initScroll() {
      if (this.malebookdata) {
        this.$nextTick(() => {
          // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
          if (!this.rankingtyperScroll) {
            // 避免页面多次实例化BScroll引起内存泄漏
            this.rankingtyperScroll = new BScroll(this.$refs.rightcontent, {
              // scrollY: true, // 让滑动容器横轴滚动
              click: true,
              scrollX: true,
             probeType: 3
            });
            // console.log(this.$refs.rankingbox);
            this.rankingtyperScroll.on("scroll", this.rankingWrapperScroll); //监听商品栏滑动事件
          } else {
            this.rankingtyperScroll.refresh();
          }
        });
      }
    },
  //  rankingWrapperScroll({y}){
  //     console.log('y==>',y)
  //  },

    comeback() {
      this.$router.go(-1);
    },
    gotoinfo(name,type){
      console.log('name',name)
      console.log('type',type)
      this.$router.push({path:'/categoryinfo',query:{name:name,type:type}});
    }
  },
  mounted() {
    this.$http("/cats/lv2/statistics").then(res => {
      this.femalebookdata = res.data.female;
      this.malebookdata = res.data.male;
      this.tagbookdata = res.data.picture;
      this.editbookdata = res.data.press;
      console.log("this.femalebookdata==>", this.femalebookdata);
    });

    this._initScroll();

    // this.$http("/ranking/gender").then(res => console.log("data", res));
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.auto-img {
  width: 100%;
  height: 100%;
}

.box {
  position: relative;
  width: 100%;
  height: calc(100vh - 30px);
  z-index: 10;
  background-color: white;
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  .nav {
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    color: black;
    font-weight: 500;
    position: relative;
    padding-bottom: 0.4rem;

    .return {
      position: absolute;
      top: -4px;
      left: 3px;
      display: table-cell;

      .returntext {
        font-size: 0.4rem;
        vertical-align: middle;
        color: rgba(214, 20, 20, 0.8);
      }

      .returnicon {
        font-size: 0.8rem;
        vertical-align: middle;
        color: rgb(207, 25, 25);
      }
    }
  }

  .content {
    flex: 1;
    display: flex;

    .leftcontent {
      flex: 0 0 1.8rem;
      height: 100%;

      li {
        padding: 0.5rem 0;
        font-size: 0.4rem;
        color: black;
      }

      .active {
        background-color: rgba(214, 186, 209, 0.295);
      }
    }

    .rightcontent {
      flex: 1;
      height: 100%;
      color: rgba(7, 17, 27, 0.397);
      padding: 0 0.25rem;
      overflow: hidden;

      .rightcontentnav {
        position: relative;
        width: 100%;

        .throughline {
          display: inline-block;
          width: 100%;
          height: 0.06rem;
          background-color: rgba(7, 17, 27, 0.096);
          position: absolute;
          top: 0.25rem;
          left: 0rem;
          z-index: -1;
        }
      }

      .rightcontent-title {
        position: relative;
        width: 2.4rem;
        margin: 0 auto;
        z-index: 10;
        background-color: white;
        margin-bottom: 0.4rem;

        .iconleft {
          display: inline-block;
          width: 0.15rem;
          height: 0.15rem;
          border-radius: 50%;
          background-color: rgba(7, 17, 27, 0.308);
          position: absolute;
          top: 0.22rem;
          left: 0.1rem;
        }

        .iconright {
          display: inline-block;
          width: 0.15rem;
          height: 0.15rem;
          border-radius: 50%;
          background-color: rgba(7, 17, 27, 0.308);
          position: absolute;
          top: 0.22rem;
          right: 0.1rem;
        }
      }

      .categorycontent {
        overflow: hidden;
        li {
          float: left;
          margin-right: 0.25rem;
          width: calc((100% - 0.25rem) / 2);
          height: 1.8rem;
          background-color: rgba(214, 186, 209, 0.295);
          margin-bottom: 0.4rem;
          padding-top: 0.2rem;
          overflow: hidden;

          &:nth-child(2n) {
            margin-right: 0;
          }
        }

        .leftinfo {
          float: left;
          width: 40%;

          .booktitle {
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;
            font-size: 0.34rem;
            color: rgba(0, 0, 0, 0.521);
          }

          .booknumber {
            font-size: 0.28rem;
          }
        }

        .rightinfo {
          float: right;
          width: 50%;
          height: 100%;
          position: relative;
        }

        .firstimg {
          position: absolute;
          width: 64%;
          height: 100%;
          z-index: 8;
          top: 0;
          left: 20%;
        }

        .secondimg {
          position: absolute;
          width: 56%;
          height: 86%;
          z-index: 7;
          top: 14%;
          left: 0;
        }

        .thirdimg {
          position: absolute;
          width: 56%;
          height: 86%;
          z-index: 7;
          top: 14%;
          right: 0;
        }
      }
    }
  }
}
</style>