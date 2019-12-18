<template>
  <div>
    <div class="box" ref="bookcontent" style="height: calc(100vh - 120px);">
      <div>
        <ul class="bookcontent">
          <li class="page">
            <p v-for="(ele,index) in content" :key="index">{{ele}}</p>
          </li>
        </ul>
      </div>

      <!-- <p class="bookcontent">{{content}}</p> -->
    </div>
    <div class="tapbar clean">
      <div class="fl">{{hour}}:{{minute}}</div>
      <div class="prev" @click.stop="prev">上一章</div>
      <div class="profile">目录</div>
      <div class="next" @click="next($event)">下一章</div>
      <div class="fr pinglun-icon iconfont icon-pinglun"></div>
    </div>
    <div class="nav">
      <span class="lefticon iconfont icon-left" @click="comeback"></span>
      {{chapters[currentindex].title}}
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: ["id"],
  data() {
    return {
      hour: "",
      minute: "",
      url: "",
      content: [],
      chapters: [],
      currentindex: 0,
      isshow: false
    };
  },
  methods: {
    _initReadingScroll() {
      if (this.chapters) {
        this.$nextTick(() => {
          // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
          if (!this.typeScroll) {
            // 避免页面多次实例化BScroll引起内存泄漏
            this.typerScroll = new BScroll(this.$refs.bookcontent, {
              // scrollY: true, // 让滑动容器横轴滚动
              click: false
            });
          } else {
            this.typerScroll.refresh();
          }
        });
      }
    },

    getBookDetil() {
      this.$http(`/toc/mix?bookId=${this.id}`).then(res => {
        let { data } = res;
        this.chapters = data.chapters;
        // console.log(this.chapters);

        this.$http(
          "/chapter/" +
            encodeURIComponent(this.chapters[this.currentindex].link)
        ).then(res => {
          // console.log(res)
          let data = res.data.chapter.body;
          this.content = data.split("\r\n");

          this._initReadingScroll();

          // console.log(this.content)
        });
      });
    },

    // 上一章
    prev() {
      if (this.currentindex == 0) {
        return;
      }
      this.currentindex = this.currentindex - 1;
      console.log("this.currentindex==>", this.currentindex);
      this.getBookDetil();
    },
    next(e) {
      e.stopPropagation();
      if (this.currentindex == this.chapters.length - 1) {
        return;
      }

      this.currentindex = this.currentindex + 1;
      console.log("this.currentindex==>", this.currentindex);
      this.getBookDetil();
    },
    comeback() {
      console.log(1111);
      this.$router.go(-1);
    }
  },
  mounted() {
    this.hour = new Date().getHours();
    this.hour = this.hour > 10 ? this.hour : "0" + this.hour;
    this.minute = new Date().getMinutes();
    this.minute = this.minute > 10 ? this.minute : "0" + this.minute;

    this.getBookDetil();
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
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
  background-color: beige;
  padding: 60px 0.5rem;
  overflow: hidden;

  .bookcontent {
    padding: 60px 0;

    .page {
      text-align: left;
      font-size: 0.48rem;
      text-indent: 0.96rem;
    }
  }
}

.nav {
  width: calc(100% - 1rem);
  padding: 0.5rem 0.5rem 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: beige;

  .lefticon {
    float: left;
    font-size: 0.6rem;
  }
}

.tapbar {
  width: calc(100% - 1rem);
  padding: 0 0.5rem;
  height: 60px;
  line-height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: beige;
  display: flex;

  .prev {
    flex: 1;
  }

  .next {
    flex: 1;
  }

  .profile {
    flex: 1;
  }

  .pinglun-icon {
    font-size: 0.5rem;
  }
}
</style>