<template>
  <div class="home">
         <div class="text-primary col col-12">
           <div class="d-flex border-bottom border-primary">
             <div class="align-self-center">
               <h4 class="mb-0">Ostatnio dodane zdarzenia</h4>
               </div></div></div> <div class="col col-12">
             <div class="card mb-2 d-flex flex-row"><!----><!---->
             <div class="d-flex flex-grow-1 min-width-zero">
               <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover table-hover-click">
                    <thead>
                      <tr>
                      <th scope="col">#</th>
                    <th scope="col">Pracownik</th>
                 <th scope="col">Definicja zdarzenia</th>
                 <th scope="col">Data dodania</th>
                 <th scope="col">Data od</th>
                 <th scope="col">Data do</th>
                 </tr>
                 </thead>
                 <tbody>
                  <comp/>
                 <tr>
                   <th scope="row">2</th>
                   <td>Tomasz Arganiński</td>
                 <td>RCP</td>
                 <td>2020-11-03 15:20</td>
                 <td>2020-10-15 07:45</td>
                 <td>2020-10-15 16:45</td>
                 </tr>
                 <tr>
                   <th scope="row">3</th>
                   <td>Tomasz Arganiński</td>
                 <td>RCP</td>
                 <td>2020-11-03 15:19</td>
                 <td>2020-06-15 07:45</td>
                 <td>2020-06-15 16:45</td>
                 </tr>
                 </tbody>
                 </table>
                 </div></div></div><!----><!----></div></div></div>
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
    width: 80vw;
    margin: 0 auto;
  }
</style>
