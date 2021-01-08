<template>
  <b-tbody class="component">
    <b-tr v-for="item in statusdefs" :key="item.id">
        <b-td class="icons text-center">
            <a @click="editStatusDef(item)" ><b-icon icon="pencil-fill"></b-icon></a>
            &nbsp;
            <a @click.prevent="deleteStatusDef(item.id)"><b-icon icon="trash-fill"></b-icon></a>
        </b-td>
        <b-td scope="row">{{item.name}}</b-td>
        <b-td>{{item.description}}</b-td>
        <b-td class="icons text-center">
          <b-icon v-if="item.isActive === true" icon="check2"></b-icon>
        </b-td>
    </b-tr>
    <editstatus :item ="StatusDefDataModal" :StatusDefOpenModal="editStatusDefOpenModal"/>
  </b-tbody>
</template>
<script>
import editstatus from './editstatusdef'
export default {
  name: 'Def',
  components: {
    editstatus
  },
  mounted () {
    this.table()
  },
  data () {
    return {
      statusdefs: [],
      StatusDefDataModal: {},
      editStatusDefOpenModal: false
    }
  },
  methods: {
    table () {
      this.statusdefs = this.$store.state.statusitems
    },
    async deleteStatusDef (val) {
      await fetch('http://10.1.10.201:1088/api/services/app/StatusDef/Delete?Id=' + val, { method: 'DELETE' })
        .then(response => response.json())
      alert('Usunięto status')
    },
    editStatusDef (val) {
      this.editStatusDefOpenModal = true
      this.StatusDefDataModal = val
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
