<template>
  <nav class="navbar fixed-top">
        <router-link class="navbar-logo" tag="b" to="/">
            <img src="../img/logo.jpg"/>
        </router-link>
        <div class="navbar-right d-flex align-items-center justify-content-end ">
                <a href="/">Strona główna</a>
                <b-button size="sm" variant="outline-secondary" href="/konto/logowanie">Logowanie</b-button>
                <!-- <a href="/konto/rejestracja">Logowanie</a>
                <b-button size="sm" variant="outline-secondary" href="/konto/logowanie">Rejestracja</b-button> -->
                <a href="/konto/rejestracja">Rejestracja</a>
        </div>
  </nav>
</template>

<script>
export default {
  name: 'LoginNav'
}
</script>
<style scoped>
nav{
    background: #fff;
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
}
.navbar{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
}
a{
    color: #222!important;
    padding: 10px;
}
.bell{
  margin-right: 10px;
}
</style>
