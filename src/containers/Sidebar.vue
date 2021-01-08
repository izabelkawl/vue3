<template>
<b-sidebar class="sidebar" id="sidebar-1" @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false" @touchstart="isMenuOver=true" shadow>
    <div class="mine-menu" >
      <a href="/"><div class="menu-items"><b-icon icon="house-fill"></b-icon><p>Pulpit</p></div></a>
      <a href="/kalendarz"><div class="menu-items"><b-icon icon="file-earmark-text"></b-icon><p>Logi</p></div></a>
      <a href="/status"><div class="menu-items"><b-icon icon="gear"></b-icon><p>Konfiguracja</p></div></a>
      <a href="/raporty"><div class="menu-items"><b-icon icon="people-fill"></b-icon><p>Użytkownicy</p></div></a>
    </div>
    <div class="sub-menu">
      <a><div><b-icon icon="bell-fill"></b-icon>Ścieżki</div></a>
      <a><div><b-icon icon="display-fill"></b-icon>Stacje robocze</div></a>
      <a><div><b-icon icon="bell-fill"></b-icon>Definicje etapów</div></a>
      <a><div><b-icon icon="info-circle-fill"></b-icon>Definicje statusów</div></a>
      <a><div><b-icon icon="gear-fill"></b-icon>Zdazenia systemowe</div></a>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar div{
  display: inline-block!important
}
.sidebar{
  position: fixed;
}
.mine-menu{
  width: 120px;
  text-align: center;
}
.menu-items{
  color: #222!important;
  line-height: 25px;
  padding-top: 20px;
  padding: 20px;
}
.menu-items:hover {
  color: #2b3c7f;
  border-left: 5px soad  #2b3c7f!important;
  margin: 0 auto;
  text-decoration: none!important;
}
.b-icon{
  font-size: 32px;
}
.sub-menu{
  border-left: 1px solid #eeeeee;
  height: 100%;
  width: 120px;
  padding: 20px;
}
.sub-menu .b-icon{
  font-size: 12px;
  color: #8f8f8f!important;
}

</style>
