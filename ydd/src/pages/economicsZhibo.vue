<template>
  <div class="Media">
    <ul class="list-inline">
        <li v-for="economic in economics">
            {{economic.Context}}
        </li>
    </ul>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'economicsZhibo',
  data () {
    return {
      economics:[]
    }
  },
  mounted  () {
     this.initData();
  },
  methods: {
    initData (){
      let params={
          'uid':50017,
          'unix':'0',
          'sid':'594baafbe138236e874fccec',
        };

      let response = api.economicsZhibo(params);

      response.then(function(res){
        if(res.data.Code ==3){
            this.economics=res.data.Data;
        }
      }).catch(function(err){
          console.log(err);
        });
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
