<template>
    <b-modal v-model="StepDefOpenModal" id="editstep" size="md"  centered  title="Zarządzaj step">
           <b-form-group
        label="Nazwa">
          <b-form-input
            size="sm"
            v-model="$v.item.name.$model"
            type="text"
            class="form-control">
          </b-form-input>
            <span class="error" v-if="!$v.item.name.required">Nazwa nie moze byc pusta</span>
            <span class="error" v-if="!$v.item.name.minLength">Min 3 znaki.</span>
          </b-form-group>
           <b-form-group
        label="Ścieżka">
          <b-form-input
            size="sm"
            v-model="$v.item.description.$model"
            type="text"
            class="form-control">
          </b-form-input>
            <span class="error" v-if="!$v.item.description.required">Opis nie może być pusty</span>
          </b-form-group>
          <br><br>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm" v-on:click="editSelectedStepDef(item.id)" >Zapisz</b-button>
          </template>
    </b-modal>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'editstep',
  props: {
    item: Object,
    StepDefOpenModal: Boolean
  },
  data () {
    return {
      stepdef: [],
      submitStep: null
    }
  },
  validations: {
    item: {
      name: {
        required,
        minLength: minLength(3)
      },
      description: {
        required
      }
    }
  },
  methods: {
    async editSelectedStepDef (val) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStep = 'ERROR'
        alert('Błąd aktualizacji')
      } else {
        this.stepdef = ({ id: val, name: this.item.name, description: this.item.description })
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.stepdef)
        }
        await fetch('http://10.1.10.201:1088/api/services/app/StepDef/Update?Id=' + val, requestOptions)
          .then(response => response.json())
        alert('Zaaktualizowano ściezkę')
        this.submitStep = 'PENDING'
        setTimeout(() => {
          this.submitStep = 'OK'
        }, 500)
      }
    }
  }
}
</script>
<style scoped>
  span{
    color: red;
    font-size: 10px;
  }
</style>
