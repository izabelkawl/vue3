<template>
    <b-modal size="lg" id="add" centered title="Zarządzaj ścieżkami"
      ref="modal">
      <template #modal-main="{ }">
       <b-form ref="form" @submit.stop.prevent="handleSubmit">
         <b-form-group
         id="checkbox-group-1"
        label="Status"
        label-for="input-1">

           <b-form-checkbox id="checkbox-group-1" name="check-button" size="lg" switch>
          </b-form-checkbox>
         </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Nazwa ścieżki"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="text"
          :state="nameState"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Ścieżka:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="text"
          :state="pathState"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button type="button" v-on:click="onSubmit()" variant="success">Rejestracja</b-button>
    </b-form>
    </template>
                      <template #modal-footer="{ ok, cancel }">
                        <b-button size="sm" variant="outline-secondary" @click="cancel()">
                          Zamknij
                        </b-button>
                        <b-button size="sm"  @click="ok()">
                          Dodaj
                        </b-button>
                    </template>
    </b-modal>
</template>
<script>
export default {
  name: 'add'
}
</script>
