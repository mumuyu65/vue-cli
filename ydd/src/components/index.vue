<template>
  <div class="index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to ydd index页面'
    }
  }
}
</script>

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
