<template>
  <div class="header">
    <div class="container">
      <div class="nav-left">
        <ul class="list-inline">
          <li><a href="" class="cur">赢资讯</a></li>
          <li><a href="">德媒体</a></li>
          <li><a href="">道直播</a></li>
          <li><a href=""><img src="../../static/win/images/logo.png"></a></li>
          <li><a href="">金融超市</a></li>
          <li><a href="">钱阁</a></li>
          <li><a href="">软件中心</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped>
  .header {
    height: 70px;
    background: url(../../static/images/bg.png) repeat-x;
    width: 100%;
  }

  .header .nav-left ul li {
    line-height: 68px;
    margin-right:80px;
  }

  .header .nav-left ul li:nth-last-child(1){
    margin-right:0px;
  }

  .header .nav-left ul li a {
    font-size: 18px;
    color: #fff;
    height: 70px;
    display: inline-block;
  }
</style>
