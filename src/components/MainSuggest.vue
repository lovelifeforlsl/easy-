<template>
  <div v-if="datatype.mainsuggest&&Maindata.length">
    <div class="mainsuggestbox">
      <h3>{{datatype.mainsuggest.title}}</h3>
      <div>
        <span class="watchmore">查看更多</span>
        <i class="iconfont lefticon icon-right"></i>
      </div>
    </div>
    <div class="content">
      <div class="firstsugges" @click="gotobookinfo(Maindata[0]._id)">
        <div class="firstsugges-img">
          <img class="auto-img" :src="`http://statics.zhuishushenqi.com`+Maindata[0].cover" alt />
        </div>
        <div class="firstsugges-info">
          <h3 class="title">{{Maindata[0].title}}</h3>
          <p class="descript">{{Maindata[0].shortIntro}}</p>
          <div class="clean">
            <div class="fl authortable">
              <span class="iconfont authoricon icon-yonghu"></span>
              <span class="author">{{Maindata[0].author}}</span>
            </div>
            <div class="fr">
              <span class="majorCate">{{Maindata[0].majorCate}}</span>
              <span class="latelyFollower">{{hotpoint}}万人气</span>
            </div>
          </div>
        </div>
      </div>
      <div class="subsuggest">
        <ul>
          <li @click="gotobookinfo(ele._id)" v-for="(ele,index) in subsuggest" :key="index">
            <div>
              <img class="auto-img" :src="`http://statics.zhuishushenqi.com`+ele.cover" alt />
            </div>
            <div class="subsugget-author">{{ele.author}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datatype"],
  data() {
    return {
      Maindata: {},
      hotpoint: "",
      subsuggest: []
    };
  },
  watch: {
    datatype: function(newVal) {
      console.log(newVal.mainsuggest.suggestypeid);
      let id = newVal.mainsuggest.suggestypeid;
      this.$http(`/ranking/${id}`).then(res => {
        this.Maindata = res.data.ranking.books;
        // console.log("thisdata=>", this.Maindata);
        this.hotpoint = (this.Maindata[0].latelyFollower / 10000).toFixed(1);
        this.subsuggest = [];
        for (var i = 4; i < 8; i++) {
          this.subsuggest.push(this.Maindata[i]);
        }
        console.log(this.subsuggest);
      });
    }
  },
  methods: {
    gotobookinfo(id) {
      console.log('id==>',id)
      this.$router.push({ path:"/bookinfo",query:{id}});
    }
  }
};
</script>

<style lang="scss" scoped>
.auto-img {
  display: block;
  width: 100%;
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

.mainsuggestbox {
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  overflow: hidden;

  h3 {
    float: left;
    font-size: 0.42rem;
    color: black;
    font-weight: 600;
  }

  div {
    float: right;
    color: rgba(7, 17, 27, 0.425);
    font-weight: 600;

    .watchmore {
      font-size: 0.3rem;
      line-height: 0.42rem;
    }

    .lefticon {
      font-size: 0.38rem;
      position: relative;
      top: -0.02rem;
      margin-left: 0.04rem;
    }
  }
}

.content {
  padding: 0.4rem 0.5rem;

  .firstsugges {
    display: flex;

    .firstsugges-img {
      flex: 0 0 2.4rem;
      border: 1px solid rgba(7, 17, 27, 0.1);
      box-shadow: 1px 2px 4px rgba(7, 17, 27, 0.3);
    }

    .firstsugges-info {
      margin-left: 0.38rem;

      .title {
        font-size: 0.44rem;
        text-align: left;
        color: rgba(0, 0, 0, 0.829);
        margin-bottom: 0.3rem;
        margin-top: 0.1rem;
      }
      .descript {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.34rem;
        margin-bottom: 0.3rem;
      }

      .authoricon {
        font-size: 0.3rem;
        vertical-align: bottom;
      }

      .author {
        font-size: 0.35rem;
        margin-left: 0.2rem;
        line-height: 0.3rem;
        vertical-align: bottom;
      }

      .majorCate {
        display: inline-block;
        padding: 0.08rem 0.2rem;
        font-size: 0.24rem;
        background-color: rgba(228, 230, 233, 0.575);
        padding: 0.08rem 0;
        border-radius: 0.28rem;
      }

      .authortable {
        display: table-cell;
      }

      .latelyFollower {
        display: inline-block;
        font-size: 0.24rem;
        background-color: rgba(230, 32, 91, 0.089);
        color: rgba(255, 0, 0, 0.5);
        padding: 0.08rem 0.2rem;
        border-radius: 0.28rem;
        margin-left: 0.2rem;
      }
    }
  }

  .subsuggest {
    padding: 0.6rem 0rem 0rem;

    ul {
      width: 100%;
      display: flex;

      li {
        flex: 1;
        margin-right: 0.4rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    .subsugget-author {
      font-size: 0.36rem;
      margin-top: 0.2rem;
    }
  }
}
</style>