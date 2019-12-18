<template>
        <div class="tapbarbox">     
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
    </div>
</template>

<style lang="scss" scoped>
.tapbarbox {
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  font-size: 0.36rem;
}

.tapbarbox > ul {
  display: flex;
  height: 100%;

  li {
    flex: 1;
    padding-top: 0.3rem;
  }

  .menu {
    position: relative;
    font-size: 0.65rem;
  }
}
</style>