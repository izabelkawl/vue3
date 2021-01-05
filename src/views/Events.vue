<template>
  <div class="events">
    <a href="/">Strona główna </a>|
      <a href="/pulpit">Pulpit </a>|
      <a href="/pulpit/path">Ścieżki</a>
        <h4>Ostatnio dodane zdarzenia</h4>
      <div class="tablebox">
       <b-table-simple hover >
            <b-thead>
              <b-tr>
                <b-th scope="col" class="edit">#</b-th>
                <b-th scope="col" >Pracownik</b-th>
                <b-th scope="col" >Definicja zdarzenia</b-th>
                <b-th scope="col" >Data dodania</b-th>
                <b-th scope="col" >Data od</b-th>
                <b-th scope="col" >Data do</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="col" class="edit">1</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
                <b-td scope="col" >2020-11-03 00:00</b-td>
                <b-td scope="col" >2020-11-03 23:59</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">2</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
                <b-td scope="col" >2020-11-03 00:00</b-td>
                <b-td scope="col" >2020-11-03 23:59</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">3</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
                <b-td scope="col" >2020-11-03 00:00</b-td>
                <b-td scope="col" >2020-11-03 23:59</b-td>
              </b-tr>
            </b-tbody>
      </b-table-simple>
      </div>
      <h4>Ostatnio dodani pracownicy</h4>
      <div class="tablebox tab2">
       <b-table-simple hover >
            <b-thead>
              <b-tr>
                <b-th scope="col" class="edit">#</b-th>
                <b-th scope="col" >Pracownik</b-th>
                <b-th scope="col" >Definicja zdarzenia</b-th>
                <b-th scope="col" >Data dodania</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="col" class="edit">1</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">2</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">3</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">4</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">5</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">6</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
               <b-tr>
                <b-th scope="col" class="edit">7</b-th>
                <b-td scope="col" >Kamil Buczyński</b-td>
                <b-td scope="col" >Praca</b-td>
                <b-td scope="col" >2020-11-03 15:24</b-td>
              </b-tr>
            </b-tbody>
      </b-table-simple>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Events'
}
</script>

<style lang="scss">
.events{
  padding: 120px 50px;
  margin: 0 auto;
  height: min-content;
  }
.h4, h4{
  margin-top: 30px;
  font-size: 1.15rem;
  font-weight: 400;
  margin-bottom: 0;
  }
.tablebox{
  background-color: #fff;
  padding: 28px!important;
  border-top: 1px solid black!important;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1);
}
.tab2{
  width: 50%;
}
</style>
