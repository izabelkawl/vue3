<template>
<b-sidebar class="sidebar" id="sidebar-1" shadow>
    <div >
      <a href="/"><div class="menu-items"><b-icon icon="house-fill"></b-icon><p>Pulpit</p></div></a>
      <a href="/kalendarz"><div class="menu-items"><b-icon icon="calendar-week-fill"></b-icon><p>Kalendarz</p></div></a>
      <a href="/status"><div class="menu-items"><b-icon icon="people-fill"></b-icon><p>Pracownicy</p></div></a>
      <a href="#"><div class="menu-items"><b-icon icon="gear"></b-icon><p>Konfiguracja</p></div></a>
      <a href="/raporty"><div class="menu-items"><b-icon icon="graph-up"></b-icon><p>Raporty</p></div></a>
    </div>
    <!-- <div class="sub-menu">
        <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }">
            <div>
                <ul>
                    <div>
                        <router-link tag="li">
                            <a>
                                <i ></i>
                                cos
                            </a>
                        </router-link>
                    </div>
                </ul>
            </div>
        </vue-perfect-scrollbar>
    </div> -->
  </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}

</script>

<style scoped>
.sidebar{
  position: fixed;
}
.menu-items{
  margin: 30px 0;
  line-height: 25px;
  padding-top: 20px;
}
.menu-items:hover {
  color: #2b3c7f;
  border-left: 5px solid  #2b3c7f!important;
}
/* .menu-items:focus{
  color: #2b3c7f;
  border-left: 5px solid #2b3c7f!important;
} */
.b-icon{
  font-size: 32px;
}
a{
  color: #222;
  text-align: center;
  margin: 0 auto;
  text-decoration: none!important;
}

</style>
