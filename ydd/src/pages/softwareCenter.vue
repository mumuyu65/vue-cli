<template>
  <div class="software text-center">
    <div id="dowebok" class="fullpage-wrapper">
      <div class="section section1 fp-section fp-table active"  style="height: 950px;">
        <div class="fp-tableCell" style="height:950px;" v-animate="'slideIn'">
          <img src="../../static/sof-img/abc1.jpg">
          <a href="http://logic.1.goldmen.win:88/GoldFinger/Yingdedaocj.zip"></a>
        </div>
      </div>
      <div class="section section2 fp-section fp-table" style="height: 950px;">
        <div class="fp-tableCell" style="height:950px;"  v-animate="'slideIn'">
          <img src="../../static/sof-img/abc2.jpg">
        </div>
      </div>
      <div class="section section3 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc3.jpg">
      </div></div>
      <div class="section section4 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc4.jpg">
      </div></div>
      <div class="section section5 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc5.jpg">
      </div></div>
      <div class="section section6 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc6.jpg">
      </div></div>
      <div class="section section7 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc7.jpg">
      </div></div>
      <div class="section section8 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <img src="../../static/sof-img/abc8.jpg">
      </div></div>
      <div class="section section9 fp-section fp-table" style="height: 950px;"><div class="fp-tableCell" style="height:950px;">
        <div class="down_sof">
          <p>根据您的设备，选择下载</p>
          <div class="sof">
            <a href="https://itunes.apple.com/cn/app/ying-de-dao-cai-jing/id1097768093?mt=8"><img src="../../static/sof-img/iphone.png"></a>
            <a><img src="../../static/sof-img/ewm.png"></a>
            <a href="http://logic.1.goldmen.win:88/GoldFinger/Android/xhazwp.apk"><img src="../../static/sof-img/android.png"></a>
            <a href="http://logic.1.goldmen.win:88/GoldFinger/Yingdedaocj.zip"><img src="../../static/sof-img/pc.png"></a>
          </div>
        </div>
      </div></div>
    </div>
    <div id="fp-nav">
      <ul class="list-unstyled">
        <li>
          <a href="#" class="active">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span></span></a>
        </li>
        <li>
          <a href="#" class="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li data-tooltip="">
          <a href="#" class="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareCenter',
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        stopPageScroll: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
</script>

<style scoped>
  .fullpage-wrapper{
    height: 100%;
    position: relative;
    top: 0px;
  }

  #dowebok .section1,.section3,.section5,.section7 {
    background: #000;
    position: relative;
  }

  #dowebok .section2,.section4,.section6,.section8 {
    background: #e7201d;
  }

  #dowebok .section .down_sof {
    margin-top: 180px;
    margin-bottom: 50px;
  }

  #dowebok .section .down_sof p {
    font-size: 30px;
    color: rgba(0,0,0,0.9);
    text-align: center;
    padding-bottom: 40px;
  }

  #dowebok .section .down_sof .sof {
      width: 1200px;
      margin: auto;
      position: relative;
    }

  #dowebok .section .down_sof .sof a{
    margin-right:30px;
  }

  #fp-nav {
    position: fixed;
    z-index: 100;
    top: 50%;
    opacity: 1;
    right:20px;

  }

  #fp-nav li{
    display: block;
    width: 14px;
    height: 13px;
    margin: 7px;
    position: relative;
  }

  #fp-nav li a{
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  #fp-nav span{
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    background: rgba(0, 0, 0, 0);
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }

  #fp-nav li a.active span{
    background-color:#4ec200;
  }
</style>
