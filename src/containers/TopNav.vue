<template>
  <nav class="navbar">
        <div class="d-flex align-items-center navbar-left">
            <a href="#" @click.prevent="openNav()" v-b-toggle.sidebar-1 class="menu-button d-none d-md-block">
                    <b-icon icon="list" scale="2"></b-icon>
            </a>
        </div>
        <router-link class="navbar-logo" tag="a" to="/">
            <img src="../img/logo.jpg"/>
        </router-link>
        <div class="navbar-right d-flex align-items-center justify-content-end ">
                  <b-icon class="bell" icon="bell" scale="1"></b-icon>
                  <b-dropdown right variant="empty" toggle-class="p-0" menu-class="mt-3" no-caret>
                          <template slot="button-content">
                              <div>
                                  <span class="name mr-2">admin admin</span>
                                  <b-icon icon="person-fill" ></b-icon>
                              </div>
                          </template>
                  <b-dropdown-item>Wyloguj</b-dropdown-item>
              </b-dropdown>
        </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    openNav () {
      document.getElementById('mySidebar').style.width = '250px'
      document.getElementById('main').style.marginLeft = '250px'
    }
  }
}
</script>
<style scoped>
nav{
    background: #fff;
    height: 100px;
    padding-left: 55px;
    padding-right: 55px;
}
.navbar{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
}
a{
    color: #222!important;
}
.bell{
  margin-right: 10px;
}
</style>
