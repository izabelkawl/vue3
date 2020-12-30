<template>
<b-sidebar id="sidebar-1" shadow>
    <div class="px-3 py-2">
    <a href="#"><b-icon icon="house-fill"></b-icon>Pulpit</a>
    <a href="#"><b-icon icon="calendar-week-fill"></b-icon>Kalendarz</a>
    <a href="#"><b-icon icon="people-fill"></b-icon>Pracownicy</a>
    <a href="#"><b-icon  icon="gear"></b-icon>Konfiguracja</a>
    <a href="#"><b-icon icon="graph-up"></b-icon>Raporty</a>
    </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}

</script>
<style scoped>
.b-icon {
  font-size: 40px;
  display: block;
}
a{
  margin: 0 auto;
}

</style>
