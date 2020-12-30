<template>
    <b-modal size="md" id="add" centered  title="Dodaj ścieżkę" v-if="show">
      <div class=" col-12">
         <b-form-group
        label="Status">
          <b-form-checkbox
            v-model="form.isActive"
            name="check-button"
            switch>
            <span>{{ form.isActive === true ? 'aktywna' : 'nieaktywna'}}</span>
            </b-form-checkbox>
        </b-form-group>
      </div>
        <div class=" col-12">
           <b-form-group
        label="Nazwa">
          <b-form-input
            size="sm"
            v-model="form.name"
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
            v-model="form.path"
            type="text"
            required="required"
            aria-required="true"
            class="form-control">
          </b-form-input>
          </b-form-group>
        </div>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="outline-secondary" @click="cancel()">Zamknij</b-button>
            <b-button size="sm"  @click="onSubmit" >Dodaj</b-button>
          </template>
    </b-modal>
</template>
<script>
export default {
  name: 'add',
  data () {
    return {
      form: {
        name: '',
        path: '',
        isActive: ''
      },
      show: true,
      database: []
    }
  },
  methods: {
    onSubmit () {
      fetch('/api/services/app/Paths/Create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: '12', name: this.form.name, path: this.form.path })
      }).then(function (response) {
        return response.json(JSON.stringify({ id: '12', name: this.form.name, path: this.form.path }))
      }).then(function (text) {
        console.log(text)
        console.log(text)
      }).catch(function (error) {
        console.error(error)
      })
      console.log(JSON.stringify({ id: '12', name: this.form.name, path: this.form.path }))
    }
  }
}
</script>
