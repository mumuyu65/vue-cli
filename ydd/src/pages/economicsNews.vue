<template>
  <div class="news">
    <div class="row t-nav">
        <ul class="list-unstyled">
           <li class="t-1"><a href="zx_home.php?uid=50000">头条</a></li>
           <li class="t-1"><a href="zx_home.php?uid=50001">原油</a></li>
           <li class="t-1"><a href="zx_home.php?uid=50002">贵金属</a></li>
           <li class="t-1"><a href="zx_home.php?uid=50003">股票</a></li>
           <li class="t-1"><a href="zx_home.php?uid=50004">期货</a></li>
           <li class="t-1"><a href="zx_home.php?uid=50005">外汇</a></li>
        </ul>
    </div>
    <div class="row box xw">

    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'economicsNews',
  data () {
    return {
      newsList:[],
    }
  },
  mounted  () {
     this.initData();
  },
   methods: {
    initData (){
      let that = this;
      let params={
          'uid':50000,
          'unix':'0',
          'sid':'594c967de138236e874fcf9b',
        };

      let response = api.economicsNews(params);

      response.then(function(res){
        console.log(res);
      }).catch(function(err){
          console.log(err);
        });
    }
  },

}
</script>

<style scoped>

.news .t-nav {
    border-bottom: 1px solid #eeeeee;
    margin-top: 8px;
    margin-bottom: 15px;
}

.news .t-nav ul li {
    float: left;
    height: 50px;
    line-height: 50px;
}

.news .t-nav .t-1 {
    margin-right: 74px;
}

.news .t-nav ul li a {
    color: #000;
    font-size: 26px;
}

</style>
