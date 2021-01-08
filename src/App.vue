<template>
  <div id="app">
    <menus/>
  </div>
</template>

<script>
import menus from './views/menus.vue'

export default {
  components: {
    menus
  },
  data () {
    return {
      database: []
    }
  },
  async mounted () {
    // Paths
    await this.getPaths()
    // StatusDef
    await this.getStatusDef()
    console.log(this.$store.state.items)
    console.log(this.$store.state.statusitems)
  },
  methods: {
    async getPaths () {
      await fetch('http://10.1.10.201:1088/api/services/app/Paths/GetAll')
        .then(function (response) {
          return response.json()
        })
        .then(data => { this.$store.commit('database', data.result.items) })
    },
    async getStatusDef () {
      await fetch('http://10.1.10.201:1088/api/services/app/StatusDef/GetAll')
        .then(function (response) {
          return response.json()
        })
        .then(data => { this.$store.commit('statusdef', data.result.items) })
    }
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
a{
    color: black!important;
    text-decoration: none!important;
  }
  a:hover{
    color: #2b3c7f!important;
  }
  .btn .btn-secondary{
  background-color: #fff;
}
</style>
