<template>
  <div class="home">
      <a>Strona główna | </a>
      <a>Pulpit | </a>
      <a>Ścieżki</a>
      <br>
      <hr>
      <div class="tablecontainer">
                <b-row class="h-100 align-items-center">
                  <b-col sm="10"></b-col>
                  <div>
                  <b-icon v-b-modal.add icon="plus-square" scale="1.5"></b-icon>
                   <b-modal size="lg" id="add" centered  title="Zarządzaj ścieżkami">
<div class="col-md-6 col-12"><fieldset class="form-group" id="__BVID__275"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__275__BV_label_">Status</legend></fieldset>
<b-form-checkbox name="check-button" size="lg" switch>
    </b-form-checkbox></div>

    <br>
                    <div class="col-md-6 col-12"><fieldset class="form-group" id="__BVID__275"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__275__BV_label_">Nazwa</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><input type="text" placeholder="Nazwa stanowiska pracy" required="required" aria-required="true" class="form-control" id="__BVID__276"><!----><!----><!----></div></fieldset></div>
                    <div class="col col-12"><fieldset class="form-group" id="__BVID__278"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__278__BV_label_">Opis</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><textarea id="textarea" placeholder="Opis stanowiska pracy..." wrap="soft" class="form-control" style="resize: none; overflow-y: scroll; height: 101px;"></textarea><!----><!----><!----></div></fieldset></div>
                    <p>.</p>
                  </b-modal>
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
                <b-td scope="col" class="text-center">Aktywny</b-td>
              </b-tr>
            </b-thead>
            <comp/>
      </b-table-simple>
    <b-row>
      <b-col >
       <p>Ilość: {{this.$store.state.items.length}}</p>
        </b-col>
      </b-row>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import comp from '@/components/comp.vue'
export default {
  name: 'Home',
  components: {
    comp
  }
}
</script>
<style scoped>
  .home{
    padding: 100px;
    margin: 0 auto;
  }
  .tablecontainer{
  background: #fff
  }
a{
    margin-right: 10px;
  }
td{
    color: #6974a1;
  }
  .edit{
  width: 100px;
  }
</style>
