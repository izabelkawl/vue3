<template>
  <b-tbody class="component">
    <b-tr v-for="item in stepdefs" :key="item.id">
        <b-td class="icons text-center">
            <a @click="editStepDef(item)" ><b-icon icon="pencil-fill"></b-icon></a>
            &nbsp;
            <a @click.prevent="deleteStepDef(item.id)"><b-icon icon="trash-fill"></b-icon></a>
        </b-td>
        <b-td scope="row">{{item.name}}</b-td>
        <b-td>{{item.description}}</b-td>
    </b-tr>
    <editstep :item ="StepDefDataModal" :StepDefOpenModal="editStepDefOpenModal"/>
  </b-tbody>
</template>
<script>
import editstep from './editstepdef'
export default {
  name: 'StepDef',
  components: {
    editstep
  },
  mounted () {
    this.table()
  },
  data () {
    return {
      stepdefs: [],
      StepDefDataModal: {},
      editStepDefOpenModal: false
    }
  },
  methods: {
    table () {
      this.stepdefs = this.$store.state.stepitems
    },
    async deleteStepDef (val) {
      await fetch('http://10.1.10.201:1088/api/services/app/StepDef/Delete?Id=' + val, { method: 'DELETE' })
        .then(response => response.json())
      alert('Usunięto step')
    },
    editStepDef (val) {
      this.editStepDefOpenModal = true
      this.StepDefDataModal = val
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
