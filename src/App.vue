<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './views/index.vue'
export default {
  components: {
    index
  },
  data () {
    return {
      database: []
    }
  },
  mounted () {
    fetch('http://10.1.10.201:1088/api/services/app/Paths/GetAll')
      .then(function (response) {
        return response.json()
      })
      .then(data => { this.$store.commit('database', data.result.items) })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica Neue,Segoe UI,Helvetica,Verdana,sans-serif;
  min-height: 100vh;
  font-size: 14px;
  font-weight: 400;
  background: #f8f8f8;
}
.b-sidebar {
  width: 120px !important;
  justify-content: center;
}
#sidebar-1{
  margin-top: 100px!important;
}
.b-sidebar > .b-sidebar-header{
   display: none !important;
}
</style>
