<template>
    <b-modal v-model="openModal" id="edit" size="md"  centered  title="Zarządzaj ścieżką">
         <b-form-group
        label="Status">
          <b-form-checkbox
            v-model="item.isActive"
            name="check-button"
            switch>{{ item.isActive === true ? 'aktywna' : 'nieaktywna'}}
            </b-form-checkbox>
        </b-form-group>
           <b-form-group
        label="Nazwa">
          <b-form-input
            size="sm"
            v-model="$v.item.name.$model"
            type="text"
            class="form-control">
          </b-form-input>
            <span class="error" v-if="!$v.item.name.required">Nazwa nie moze byc pusta</span>
            <span class="error" v-if="!$v.item.name.minLength">Min 4 znaki.</span>
          </b-form-group>
           <b-form-group
        label="Ścieżka">
          <b-form-input
            size="sm"
            v-model="$v.item.path.$model"
            type="text"
            class="form-control">
          </b-form-input>
            <span class="error" v-if="!$v.item.path.required">Ścieżka nie może być pusta</span>
          </b-form-group>
          <br><br>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm" v-on:click="editSelectedPath(item.id)" >Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'edit',
  props: {
    item: Object,
    openModal: Boolean
  },
  data () {
    return {
      database: [],
      submitStatus: null
    }
  },
  validations: {
    item: {
      name: {
        required,
        minLength: minLength(4)
      },
      path: {
        required
      }
    }
  },
  methods: {
    editSelectedPath (val) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        alert('Błąd aktualizacji')
      } else {
        this.database = ({ id: val, name: this.item.name, path: this.item.path, isActive: this.item.isActive })
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.database)
        }
        fetch('http://10.1.10.201:1088/api/services/app/Paths/Update?Id=' + val, requestOptions)
          .then(response => response.json())
        alert('Zaaktualizowano ściezkę')
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
