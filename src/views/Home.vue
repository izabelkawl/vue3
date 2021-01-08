<template>
  <div class="home">
        <a href="/">Strona główna </a>|
        <a href="/pulpit">Pulpit </a>|
        <a href="/pulpit/path">Ścieżki</a>
      <br>
      <hr>
        <div class="tablecontainer">
            <b-row class="h-100 align-items-center">
              <b-col sm="10"></b-col>
                <div>
                  <a v-b-modal.add> <b-icon icon="plus-square" scale="1.5"></b-icon></a>
                </div>
              <b-col >
                <b-input-group size="sm">
                  <b-input-group-prepend is-text>
                    <b-icon icon="search"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="search" placeholder="Szukaj.."></b-form-input>
                    </b-input-group>
                </b-col>
              </b-row>
              <b-table-simple striped hover bordered>
                <b-thead>
                      <b-tr>
                        <b-td scope="col" class="edit"></b-td>
                        <b-td scope="col" >Nazwa</b-td>
                        <b-td scope="col" >Ścieżka</b-td>
                        <b-td scope="col" class="text-center">Aktywna</b-td>
                      </b-tr>
                    </b-thead>
                    <!-- Components -->
                    <comp/>
                    <add/>
              </b-table-simple>
              <b-row>
                <b-col >
                <p class="sum">Ilość: {{this.$store.state.items.length}}</p>
                </b-col>
              </b-row>
            </div>
  </div>
</template>

<script>
// @ is an alias to /src
import comp from '@/components/comp.vue'
import add from '@/components/addpath.vue'

export default {
  name: 'Home',
  components: {
    comp,
    add
  }
}
</script>
<style lang="scss">
  .home{
    padding: 120px 50px;
    margin: 0 auto;
  }
  .tablecontainer{
  background: #fff
  }
  .edit{
  width: 100px;
  margin: 100px;
  }
  .sum{
    margin-left: 112px;
    font-weight: bold;
  }
</style>
