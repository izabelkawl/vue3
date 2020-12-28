<template>
  <div class="home">
      <h6>Ścieżki</h6>
      <b-table-simple striped hover small bordered>
            <b-thead>
              <b-tr>
                <b-td scope="col" ></b-td>
                <b-td scope="col" >Nazwa</b-td>
                <b-td scope="col" >Ścieżka</b-td>
                <b-td scope="col" class="text-center">Aktywny</b-td>
              </b-tr>
            </b-thead>
            <comp/>
      </b-table-simple>
       <p>Ilość: {{this.$store.state.items.length}}</p>
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
    width: 60vw;
    margin: 0 auto;
  }
h6, td{
    color: #6974a1;
  }
</style>
