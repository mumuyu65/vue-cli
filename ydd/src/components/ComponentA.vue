<template>
  <div class="hello">
    <h1><a href="">{{ msg }}</a></h1>
    <h2>{{ msgfromfather }}</h2>
    <button v-on:click="onClickMe">点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello from Component A!'
    }
  },
  props: ['msgfromfather'],
  methods: {
    onClickMe: function () {
      console.log(this.msgfromfather)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul.index {
  list-style-type: none;
  padding: 0;
}

ul.index li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
