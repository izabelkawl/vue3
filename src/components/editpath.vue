<template>
    <b-modal size="md" id="edit" centered  title="Zarządzaj ścieżką">
      <div class=" col-12">
        <fieldset class="form-group" id="__BVID__275">
          <b-form-label>Status</b-form-label>
          <b-form-checkbox v-model="checked"  name="check-button" switch><span>{{checked}}</span> </b-form-checkbox>
        </fieldset>
      </div>
        <div class=" col-12">
          <fieldset class="form-group" id="__BVID__275">
            <b-form-label>Nazwa</b-form-label>
            <b-form-input size="sm" type="text" required="required" aria-required="true" class="form-control"></b-form-input>
          </fieldset>
        </div>
        <div class="col-12">
          <fieldset class="form-group" id="__BVID__278">
            <b-form-label>Ścieżka</b-form-label>
            <b-form-input size="sm" type="text" required="required" aria-required="true" class="form-control"></b-form-input>
          </fieldset>
        </div>
          <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm"  @click="ok()">Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
export default {
  name: 'edit',
  data () {
    return {
      checked: false
    }
  }
}
</script>
