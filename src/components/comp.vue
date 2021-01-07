<template>
  <b-tbody class="component">
    <b-tr v-for="item in paths" :key="item.id">
        <b-td class="icons text-center">
            <a @click="editModel(item)" ><b-icon icon="pencil-fill"></b-icon></a>
            &nbsp;
            <a @click.prevent="deletePath(item.id)"><b-icon icon="trash-fill"></b-icon></a>
        </b-td>
        <b-td scope="row">{{item.name}}</b-td>
        <b-td>{{item.path}}</b-td>
        <b-td class="icons text-center">
          <b-icon v-if="item.isActive === true" icon="check2"></b-icon>
        </b-td>
    </b-tr>
    <edit :item ="dataModal" :openModal="editOpenModal"/>
  </b-tbody>
</template>
<script>
import edit from './editpath'
export default {
  name: 'Comp',
  components: {
    edit
  },
  mounted () {
    this.table()
  },
  data () {
    return {
      paths: [],
      dataModal: {},
      editOpenModal: false
    }
  },
  methods: {
    table () {
      this.paths = this.$store.state.items
    },
    deletePath (val) {
      fetch('http://10.1.10.201:1088/api/services/app/Paths/Delete?Id=' + val, { method: 'DELETE' })
        .then(response => response.json())
      alert('Usunięto ściezkę')
    },
    editModel (val) {
      this.editOpenModal = true
      this.dataModal = val
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
