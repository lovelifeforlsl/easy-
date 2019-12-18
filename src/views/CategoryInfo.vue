<template>
  <div class="box">
    <div class="nav">
      <div class="return" @click="comeback">
        <span class="returnicon iconfont icon-left"></span>
        <span class="returntext">返回</span>
      </div>
      {{name}}
    </div>
    <div class="content">
      <div @click="gotobookinfo(item._id)" v-for="(item,index) in bookdata" :key="index" class="firstsugges">
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
  data: () => ({
    bookdata: [],
    min: "",
    hotpoint: []
  }),
  props: {
    name: String,
    type: String
  },
  methods: {
    comeback() {
      this.$router.go(-1);
    },
        gotobookinfo(id) {
                console.log('id==>',id)
      this.$router.push({ path:"/bookinfo",query:{id}});
    }
  },
  mounted() {
    this.$http("/cats/lv2").then(res => {
      let arr = res.data[this.type];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].major == this.name) {
          this.min = arr[i].mins[0];
          // console.log("this.min", this.min);
          break;
        }
      }
    });
    this.$http(
      `/book/by-categories?gender=${this.type}&type=hot&major=${this.name}&minor=${this.min}&start=0&limit=20`
    ).then(res => {
      console.log(this.name);
      console.log(this.min);
      console.log("book", res);
      this.bookdata = res.data.books;
      for (var i = 1; i < this.bookdata.length; i++) {
        this.hotpoint.push(
          (this.bookdata[i].latelyFollower / 10000).toFixed(1)
        );
      }
    });
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
    // overflow: hidden;

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
}
</style>