<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    fetch('http://10.1.10.201:1088/api/services/app/Paths/GetAll')
      .then(function (response) {
        return response.json()
      })
      .then(data => console.log(data))
  }
}
</script>
<style lang="scss">
#app {
  font-family: Helvetica Neue,Segoe UI,Helvetica,Verdana,sans-serif;
  min-height: 100vh;
  font-size: 14px;
  font-weight: 400;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2b3c7f;
    }
  }
}
</style>
