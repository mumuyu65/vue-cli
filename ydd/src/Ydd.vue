<template>
  <div id="app">
    <div class="container">
      <ul class="list-inline">
        <li><router-link to="/">赢资讯</router-link></li>
        <li><router-link to="/todolist">德媒体</router-link></li>
        <li><router-link to="/todolist">道直播</router-link></li>
        <li><router-link to="/">赢德道</router-link></li>
        <li><router-link to="/">软件中心</router-link></li>
        <li><router-link to="/">钱阁</router-link></li>
        <li><router-link to="/">金融超市</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ydd',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
