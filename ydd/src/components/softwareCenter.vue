<template>
  <div class="software text-center">
    
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
