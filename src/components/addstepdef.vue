<template>
    <b-modal size="md" id="addstepdef" centered  title="Dodaj status" v-if="show">
      <template>
           <b-form-group
              label="Nazwa">
            <b-form-input
              size="sm"
              v-model="name"
              type="text"
              required="required"
              aria-required="true"
              class="form-control">
            </b-form-input>
              <span class="error" v-if="!$v.name.required">Nazwa nie moze byc pusta</span>
              <span class="error" v-if="!$v.name.minLength">Min 3 znaki {{$v.name.$params.minLength.min}} letters.</span>
          </b-form-group>
          <b-form-group
             label="Opis">
            <b-form-input
              size="sm"
              v-model="description"
              type="text"
              required="required"
              aria-required="true"
              class="form-control">
            </b-form-input>
            <span class="error" v-if="!$v.description.required">Opis nie może być pusty</span>
            <br>
            <br>
            <br>
          </b-form-group>
        </template>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm" v-on:click="onSubmit" >Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'addstatusdef',
  data () {
    return {
      name: '',
      description: '',
      show: true,
      stepdef: [],
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    description: {
      required
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        alert('Błąd dodawnia, wypełnij pola')
      } else {
        this.stepdef = ({ name: this.name, description: this.description })
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.stepdef)
        }
        fetch('http://10.1.10.201:1088/api/services/app/StepDef/Create', requestOptions)
          .then(response => response.json())
        alert('Dodano ststus')
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
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
