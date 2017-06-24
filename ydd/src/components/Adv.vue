<template>
  <div class="adv">
    <ul class="list-unstyled">
      <li>
        <router-link to="/yddEconomics/economicsZhibo">
            <img src="../../static/images/gg-img1.png" />
        </router-link>
      </li>
      <li>
        <router-link to="/yddMedia/mediaTrasaction">
            <img src="../../static/images/gg-img2.png" />
        </router-link>
      </li>
      <li>
        <router-link to="/yddMedia/mediaGlobal">
            <img src="../../static/images/gg-img3.png" />
        </router-link>
      </li>
    </ul>
    <h2>市场行情</h2>
  </div>
</template>

<script>
export default {
  name: 'adv',
  data () {
    return {
      msg: 'Welcome to Your adv App'
    }
  }
}
</script>

<style scoped>
  .adv ul.list-unstyled{
    border:1px solid #ececec;
  }

  .adv ul.list-unstyled>li{
    margin-bottom:20px;
  }

  .adv h2{
    font-size: 26px;
    color: #e61f1c;
    font-weight:700;
  }
  
</style>
