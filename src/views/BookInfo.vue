<template>
  <div class="box">
    <div class="main">
      <div class="nav">
        <div class="return" @click="comeback">
          <span class="returnicon iconfont icon-left"></span>
          <span class="returntext">返回</span>
        </div>
        <div class="menu">
          <span class="pinglunicon iconfont icon-pinglun_small"></span>
          <span class="fenxiangicon iconfont icon-fenxiang"></span>
        </div>
      </div>
      <div class="maincontent">
        <div class="mainimg">
          <img class="auto-img" :src="`http://statics.zhuishushenqi.com`+book.cover" alt />
        </div>
        <div class="main-content">
          <div class="title">{{book.title}}</div>
          <div class="mar-top-5">
            <span class="focustext">{{book.author}}</span>
            <i class="divide">|</i>
            <span class="text">{{book.copyright}}</span>
          </div>
          <div class="mar-top-5">
            <span class="focustext">{{book.safelevel}}书币/千字</span>
            <i class="divide">|</i>
            <span class="text">{{wordcount}}万字</span>
          </div>
          <div class="focustext mar-top-5">开通VIP 立享八折优惠</div>
        </div>
      </div>
      <div class="scorebox">
        <div class="scorefirst">
          <div class="top-tip">
            评分：
            <span v-if="book.rating.score" class="score">{{book.rating.score}}</span>
          </div>
          <div class="bottom-tip">{{book.rating.tip}}</div>
        </div>
        <div class="scorefirst">
          <div class="top-tip">{{book.retentionRatio}}%</div>
          <div class="bottom-tip">读者留存</div>
        </div>
        <div class="scoresecond">
          <div class="top-tip">{{book.latelyFollower}}</div>
          <div class="bottom-tip">七日人气</div>
        </div>
        <div class="scoresecond">
          <div class="top-tip">{{book.totalFollower}}</div>
          <div class="bottom-tip">累计人气</div>
        </div>
      </div>
    </div>

    <div class="bottomtapbar">
      <div class="zhuigeng">
        <span class="jiaicon iconfont icon-jia"></span>
        <span>追更新</span>
      </div>
      <div class="startread" @click="startreading(book._id)">开始阅读</div>
      <div class="download">
        <span class="xiazaiicon iconfont icon-xiazai"></span>
        <span>下载</span>
      </div>
    </div>

    <ComponentSpace />

    <div class="profilebox">
      <div class="profile">简介</div>
      <p class="profiledetail">{{book.longIntro}}</p>
      <div class="clean directory">
        <div class="fl profile">目录</div>
        <div class="fr">
          <span class="status">{{book._gg?'完结':'连载'}}</span>
          <span class="count">共{{book.chaptersCount}}章</span>
          <span class="righticon iconfont icon-right"></span>
        </div>
      </div>
    </div>
    <ComponentSpace />
  </div>
</template>

<script>
import ComponentSpace from "../components/ComponentSpace";
export default {
  data() {
    return {
      book: {},
      wordcount: ""
    };
  },
  props: ["id"],
  mounted() {
    this.$http(`/book/${this.id}`).then(res => {
      console.log("bookinfo==>", res);
      this.book = res.data;
      console.log('book==>',this.book)
      //   console.log("this.book.wordCount ==>", this.book.wordCount );
      this.wordcount = (this.book.wordCount / 10000).toFixed(1);
    });

    // this.$http("/ranking/gender").then(res => console.log("data", res));
  },
  methods: {
    comeback() {
      this.$router.go(-1);
    },
    startreading(id){
      console.log(id)
      this.$router.push({path:'/reading',query:{id}})
    }
  },
  components: {
    ComponentSpace
  }
};
</script>

<style lang="scss" scoped>
.fl {
  float: left;
}

.fr {
  float: right;
}

.clean {
  overflow: hidden;
}

.auto-img {
  width: 100%;
  display: block;
}

.box {
  position: relative;
  width: 100%;
  height: calc(100vh - 55px);

  .profilebox {
    padding: 0.45rem 0.5rem 0.35rem;
    text-align: left;

    .profile {
      font-size: 0.45rem;
      color: black;
    }

    .profiledetail {
      margin-top: 0.2rem;
      font-size: 0.4rem;
      color: rgb(119, 110, 110);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .directory {
      margin-top: 0.4rem;
      padding: 0.4rem 0;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
    }

    .status {
      font-size: 0.38rem;
      color: rgb(119, 110, 110);
      margin-right: 0.2rem;
    }
    .count {
      font-size: 0.38rem;
      color: rgb(179, 170, 170);
      margin-right: 0.2rem;
    }
  }

  .main {
    padding-top: 30px;

    .scorebox {
      display: flex;
      //   width: 100%;
      padding: 0.2rem 0.5rem 0.6rem;

      .scorefirst {
        flex: 3;
      }

      .scoresecond {
        flex: 2;
      }

      .top-tip {
        color: rgba(7, 17, 27, 0.733);
        margin-bottom: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
      }

      .bottom-tip {
        font-size: 0.3rem;
        color: rgba(7, 17, 27, 0.493);
      }
    }

    .maincontent {
      width: calc(100% - 1rem);
      padding: 0.4rem 0.5rem;
      display: flex;

      .mainimg {
        flex: 0 0 2.6rem;
        height: 100%;
        border: 1px solid rgba(7, 17, 27, 0.1);
        box-shadow: 1px 2px 4px rgba(7, 17, 27, 0.3);
      }

      .divide {
        display: inline-block;
        margin: 0 0.25rem;
      }

      .main-content {
        flex: 1;
        height: 100%;
        background-color: white;
        padding-left: 0.4rem;
        text-align: left;
      }

      .mar-top-5 {
        margin-top: 0.33rem;
      }

      .title {
        font-size: 0.52rem;
        color: black;
      }

      .text {
        font-size: 0.39rem;
        color: rgba(83, 75, 75, 0.753);
      }

      .focustext {
        font-size: 0.43rem;
        color: rgba(255, 17, 0, 0.753);
      }
    }
  }

  .bottomtapbar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 55px;
    display: flex;
    font-size: 0.47rem;
    line-height: 55px;

    .zhuigeng {
      flex: 1;
      color: red;
    }

    .startread {
      flex: 0 0 4.2rem;
      height: 100%;
      background-color: rgba(255, 0, 0, 0.856);
      color: white;
    }

    .download {
      flex: 1;
      color: red;
    }

    .jiaicon {
      margin-right: 0.2rem;
    }
    .xiazaiicon {
      margin-right: 0.2rem;
      font-weight: 600;
    }
  }

  .nav {
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    color: black;
    font-weight: 500;
    position: relative;
    padding-bottom: 0.4rem;
    overflow: hidden;

    .return {
      position: absolute;
      top: -4px;
      left: 3px;
      display: table-cell;

      .returntext {
        font-size: 0.42rem;
        vertical-align: middle;
        color: rgba(214, 20, 20, 0.8);
      }

      .returnicon {
        font-size: 0.82rem;
        vertical-align: middle;
        color: rgb(207, 25, 25);
      }
    }

    .menu {
      float: right;
      margin-right: 0.5rem;
    }
    .pinglunicon {
      font-size: 0.6rem;
      color: rgb(207, 25, 25);
      margin-right: 1rem;
    }
    .fenxiangicon {
      font-size: 0.6rem;
      color: rgb(207, 25, 25);
    }
  }
}
</style>