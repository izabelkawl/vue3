<template>
<div id="app-container">
    <top-nav/>
    <!-- <login-nav/> -->
    <sidebar/>
    <main id="main">
        <div class="container-fluid">
            <router-view/>
        </div>
    </main>
    <footer-component/>
</div>
</template>

<script>
import TopNav from '@/containers/TopNav'
import Footer from '@/containers/Footer'
import Sidebar from '@/containers/Sidebar'
// import LoginNav from '@/containers/LoginNav'

export default {
  components: {
    'top-nav': TopNav,
    sidebar: Sidebar,
    'footer-component': Footer
    // 'login-nav': LoginNav
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
</style>
