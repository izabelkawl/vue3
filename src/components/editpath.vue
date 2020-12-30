<template>
    <b-modal size="lg" id="edit" centered  title="Edycja ścieżki">
                      <div class="col-md-6 col-12"><fieldset class="form-group" ><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" >Status</legend></fieldset>
                        <b-form-checkbox name="check-button" size="lg" switch>
                            </b-form-checkbox></div>
                            <br>
                      <div class="col-md-6 col-12"><fieldset class="form-group" ><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" >Nazwa</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><input type="text" placeholder="Nazwa stanowiska pracy" required="required" aria-required="true" class="form-control" ><!----><!----><!----></div></fieldset></div>
                      <div class="col col-12"><fieldset class="form-group" ><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" >Opis</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><textarea  placeholder="Opis stanowiska pracy..." wrap="soft" class="form-control" style="resize: none; overflow-y: scroll; height: 101px;"></textarea><!----><!----><!----></div></fieldset></div>
                      <template #modal-footer="{ ok, cancel }">
                        <b-button size="sm" variant="outline-secondary" @click="cancel()">
                          Zamknij
                        </b-button>
                        <b-button size="sm"  @click="ok()">
                          Zapisz
                        </b-button>
                    </template>
    </b-modal>
</template>
<script>
export default {
  name: 'edit'
}
</script>
