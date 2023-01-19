<template>
  <div class="header">
    <div class="nav-bar">
      <div class="logo">
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" alt=""/>
        <p>稀土掘金</p>
      </div>
      <div class="nav">
        <NuxtLink to="/" class="nav-item select">首页</NuxtLink>
        <NuxtLink class="nav-item">沸点</NuxtLink>
        <NuxtLink class="nav-item">课程</NuxtLink>
        <NuxtLink class="nav-item">直播</NuxtLink>
        <NuxtLink class="nav-item">活动</NuxtLink>
        <NuxtLink class="nav-item">竞赛</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #ffffff;
    border-bottom: 1px solid #909090;
    box-shadow: 1px 3px 5px #dddddd;
    .nav-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 100%;
      margin: 0 auto;
      .logo {
        display: flex;
        flex-direction: row;
        flex: 1;
        img {
          margin-right: 8px;
          cursor: pointer;
        }
        p {
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;

        }
      }
      .nav {
        flex: 7;
        .select {
          color: #1e80ff;
        }
        .nav-item {
          padding: 18px 15px;
          text-decoration: none;
          font-size: 16px;
          cursor: pointer;
          &:hover {
          border-bottom: 2px solid #1e80ff;
        }
        }
      }
    }
  }
</style>
