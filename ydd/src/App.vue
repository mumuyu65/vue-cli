<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="content">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/todolist">todolist</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .content ul{
    list-styled:none;
  }

.content ul li{
  display:inline-block;
  margin-right:20px;
}
</style>
