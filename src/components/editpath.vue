<template>
    <b-modal id="edit" size="md"  centered  title="Zarządzaj ścieżką" v-if="show">
      <div class=" col-12">
         <b-form-group
        label="Status">
          <b-form-checkbox
            name="check-button"
            switch>
            <span>{{ isActive === true ? 'aktywna' : 'nieaktywna'}}</span>
            </b-form-checkbox>
        </b-form-group>
      </div>
        <div class=" col-12">
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
          </b-form-group>
        </div>
        <div class="col-12">
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
          </b-form-group>
        </div>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm" v-on:click="editPath()" >Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
export default {
  name: 'edit',
  data () {
    return {
      id: '',
      name: '',
      path: '',
      isActive: '',
      show: true,
      database: []
    }
  },
  methods: {
    editPath (val) {
      this.database = ({ id: val, name: this.name, path: this.path, isActive: this.isActive })
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(this.database)
      }
      fetch('http://10.1.10.201:1088/api/services/app/Paths/Update?Id=' + val, requestOptions)
        .then(response => response.json())
      alert('Zaaktualizowano ściezkę')
    }
  }
}
</script>
