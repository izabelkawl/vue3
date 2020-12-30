<template>
<b-sidebar id="sidebar-1" shadow>
    <div class="px-3 py-2">
      <a href="#"><b-icon class="menu-items" icon="house-fill"></b-icon><p>Pulpit</p></a>
      <a href="#"><b-icon class="menu-items" icon="calendar-week-fill"></b-icon><p>Kalendarz</p></a>
      <a href="#"><b-icon class="menu-items" icon="people-fill"></b-icon><p>Pracownicy</p></a>
      <a href="#"><b-icon class="menu-items" icon="gear"></b-icon><p>Konfiguracja</p></a>
      <a href="#"><b-icon class="menu-items" icon="graph-up"></b-icon><p>Raporty</p></a>
    </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}

</script>
<style>
.menu-items{
  text-align: center;
  margin: 0 auto;
}

</style>
