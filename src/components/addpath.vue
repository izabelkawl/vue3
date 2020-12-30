<template>
    <b-modal size="lg" id="add" centered  title="Zarządzaj ścieżkami">
                      <div class="col-md-6 col-12"><fieldset class="form-group" id="__BVID__275"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__275__BV_label_">Status</legend></fieldset>
                        <b-form-checkbox name="check-button" size="lg" switch>
                            </b-form-checkbox></div>
                            <br>
                      <div class="col-md-6 col-12"><fieldset class="form-group" id="__BVID__275"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__275__BV_label_">Nazwa</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><input type="text" placeholder="Nazwa stanowiska pracy" required="required" aria-required="true" class="form-control" id="__BVID__276"><!----><!----><!----></div></fieldset></div>
                      <div class="col col-12"><fieldset class="form-group" id="__BVID__278"><legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__278__BV_label_">Opis</legend><div tabindex="-1" role="group" class="bv-no-focus-ring"><textarea id="textarea" placeholder="Opis stanowiska pracy..." wrap="soft" class="form-control" style="resize: none; overflow-y: scroll; height: 101px;"></textarea><!----><!----><!----></div></fieldset></div>
                      <template #modal-footer="{ ok, cancel }">
                        <b-button size="sm" variant="success" @click="ok()">
                          Dodaj
                        </b-button>
                        <b-button size="sm" variant="danger" @click="cancel()">
                          Zamknij
                        </b-button>
                    </template>
    </b-modal>
</template>
<script>
export default {
  name: 'add'
}
</script>
