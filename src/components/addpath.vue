<template>
    <b-modal size="md" id="add" centered  title="Dodaj ścieżkę" v-if="show">
      <template>
          <b-form-group
              label="Status">
            <b-form-checkbox
              v-model="isActive"
              name="check-button"
              required="required"
              disabled
              switch>
             {{ isActive === true ? 'aktywna' : 'nieaktywna'}}
            </b-form-checkbox>
          </b-form-group>
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
              <span class="error" v-if="!$v.name.minLength">Min 4 znaki {{$v.name.$params.minLength.min}} letters.</span>
          </b-form-group>
          <b-form-group
             label="Ścieżka">
            <b-form-input
              size="sm"
              v-model="path"
              type="text"
              required="required"
              aria-required="true"
              class="form-control">
            </b-form-input>
            <span class="error" v-if="!$v.path.required">Ścieżka nie może być pusta</span>
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
  name: 'add',
  mounted () {
    this.$v.$reset()
  },
  data () {
    return {
      name: '',
      path: '',
      isActive: true,
      show: true,
      database: [],
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    path: {
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
        this.database = ({ name: this.name, path: this.path })
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.database)
        }
        fetch('http://10.1.10.201:1088/api/services/app/Paths/Create', requestOptions)
          .then(response => response.json())
        alert('Dodano ściezkę')
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
