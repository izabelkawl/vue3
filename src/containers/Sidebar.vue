<template>
<b-sidebar id="sidebar-1" shadow>
    <div class="px-3 py-2">
      <a href="/"><div class="menu-items"><b-icon icon="house-fill"></b-icon><p>Pulpit</p></div></a>
      <a href="/kalendarz"><div class="menu-items"><b-icon icon="calendar-week-fill"></b-icon><p>Kalendarz</p></div></a>
      <a href="#"><div class="menu-items"><b-icon icon="people-fill"></b-icon><p>Pracownicy</p></div></a>
      <a href="#"><div class="menu-items"><b-icon icon="gear"></b-icon><p>Konfiguracja</p></div></a>
      <a href="#"><div class="menu-items"><b-icon icon="graph-up"></b-icon><p>Raporty</p></div></a>
    </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}

</script>

<style scoped>
a{
  color: #222;
  text-align: center;
  margin: 0 auto;
}
.menu-items{
  height: 110px !important;
  line-height: 25px;
  padding-top: 20px;
}
.b-icon{
  font-size: 32px;
}

</style>
