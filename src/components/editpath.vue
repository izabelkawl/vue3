<template>
    <b-modal v-model="openModal" id="edit" size="md"  centered  title="Zarządzaj ścieżką">
         <b-form-group
        label="Status">
          <b-form-checkbox
            v-model="item.isActive"
            name="check-button"
            switch>
            <span>{{ item.isActive === true ? 'aktywna' : 'nieaktywna'}}</span>
            </b-form-checkbox>
        </b-form-group>
           <b-form-group
        label="Nazwa">
          <b-form-input
            size="sm"
            v-model="item.name"
            type="text"
            class="form-control">
          </b-form-input>
          </b-form-group>
           <b-form-group
        label="Ścieżka">
          <b-form-input
            size="sm"
            v-model="item.path"
            type="text"
            class="form-control">
          </b-form-input>
          </b-form-group>
          <br><br>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm" v-on:click="editSelectedPath(item.id)" >Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
export default {
  name: 'edit',
  props: {
    item: Object,
    openModal: Boolean
  },
  data () {
    return {
      database: []
    }
  },
  methods: {
    editSelectedPath (val) {
      this.database = ({ id: val, name: this.item.name, path: this.item.path, isActive: this.item.isActive })
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.database)
      }
      fetch('http://10.1.10.201:1088/api/services/app/Paths/Update?Id=' + val, requestOptions)
        .then(response => response.json())
      alert('Zaaktualizowano ściezkę')
    }
  }
}
</script>
