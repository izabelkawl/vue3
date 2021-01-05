<template>
<div id="app-container">
    <top-nav/>
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

export default {
  components: {
    'top-nav': TopNav,
    sidebar: Sidebar,
    'footer-component': Footer

  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.b-sidebar {
    margin-top: 100px;
}
</style>
