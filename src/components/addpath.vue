<template>
    <b-modal size="md" id="add" centered  title="Dodaj ścieżkę" v-if="show">
      <template>
          <b-form-group
              label="Status">
            <b-form-checkbox
              v-model="isActive"
              name="check-button"
              required="required"
              switch>
              <span>{{ isActive === true ? 'aktywna' : 'nieaktywna'}}</span>
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
export default {
  name: 'add',
  data () {
    return {
      name: '',
      path: '',
      isActive: false,
      show: true,
      database: []
    }
  },
  methods: {
    onSubmit () {
      this.database = ({ name: this.name, path: this.path })
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.database)
      }
      fetch('http://10.1.10.201:1088/api/services/app/Paths/Create', requestOptions)
        .then(response => response.json())
      alert('Dodano ściezkę')
    }
  }
}
</script>
