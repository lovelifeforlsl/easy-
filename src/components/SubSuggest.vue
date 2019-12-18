<template>
  <div v-if="datatype.suggestypeid">
    <div class="mainsuggestbox">
      <h3>{{datatype.title}}</h3>
      <div>
        <span class="watchmore">查看更多</span>
        <i class="iconfont lefticon icon-right"></i>
      </div>
    </div>

    <div class="content">
      <div @click="gotobookinfo(item._id)" v-for="(item,index) in subsuggest" :key="index" class="firstsugges">
        <div class="firstsugges-img">
          <img class="auto-img" :src="`http://statics.zhuishushenqi.com`+item.cover" alt />
        </div>
        <div class="firstsugges-info">
          <h3 class="title">{{item.title}}</h3>
          <p class="descript">{{item.shortIntro}}</p>
          <div class="clean">
            <div class="fl authortable">
              <span class="iconfont authoricon icon-yonghu"></span>
              <span class="author">{{item.author}}</span>
            </div>
            <div class="fr">
              <span class="majorCate">{{item.majorCate}}</span>
              <span class="latelyFollower">{{hotpoint[index]}}万人气</span>
            </div>
          </div>
        </div>
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
      hotpoint: [],
      subsuggest: []
    };
  },
  methods: {
    getdata(id) {
      this.$http(`/ranking/${id}`).then(res => {
        this.Maindata = res.data.ranking.books;
        // console.log("thisdata=>", this.Maindata);
        this.subsuggest = [];
        for (var i = 1; i < 4; i++) {
          this.subsuggest.push(this.Maindata[i]);
         this.hotpoint.push((this.Maindata[i].latelyFollower / 10000).toFixed(1));
        }
                // console.log('123',this.hotpoint)
      });
    },
        gotobookinfo(id) {
                console.log('id==>',id)
      this.$router.push({ path:"/bookinfo",query:{id}});
    }
  },
  watch: {
    datatype: function(newVal) {
      // console.log(newVal.suggestypeid);
      let id = newVal.suggestypeid;
      // console.log("id", id);
      this.getdata(id)
    }
  },
  mounted() {
    this.getdata(this.datatype.suggestypeid);
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
  padding: 0.2rem 0.5rem;

  .firstsugges {
    display: flex;
    padding: 0.3rem 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

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
        font-size: 0.24rem;
        background-color: rgba(228, 230, 233, 0.575);
        padding: 0.08rem 0.2rem;
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
}
</style>