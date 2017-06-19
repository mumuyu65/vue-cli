<template>
  <div class="Economics">
    <div class="economics-header">
        <div class="container">
           <ul class="list-inline">
            <li><router-link to="/economicsZhibo" class="line">快讯直播</router-link></li>
            <li><a class="divider"></a></li>
            <li><router-link to="/economicsNews">新闻</router-link></li>
            <li><a class="divider"></a></li>
            <li><router-link to="/economicsCanlendar" >财经日历</router-link></li>
            <li><a class="divider"></a></li>
            <li><router-link to="/economicsTeachers" >名师专栏</router-link></li>
           </ul>
        </div>
    </div>
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yddEconomics',
  data () {
    return {
      msg: 'Welcome to ydd Economics页面'
    }
  }
}
</script>

<style scoped>
    .economics-header{
            background: #fff3f3;
            width: 100%;
            height: 50px;
            line-height:50px;
    }

    .economics-header ul li{
        margin-right:20px;
    }

    .economics-header ul li a{
        font-size:14px;
        color:#000;
        border-bottom:2px solid transparent;
        padding:10px 0;
    }
    .economics-header ul li a.divider{
        display:inline-block;
        width:1px;
        height:30px;
        background-color:#000;

    }

    .economics-header ul li a.line{
        border-bottom: 2px solid #e61f1c;
        color: #e61f1c;
    }
</style>
