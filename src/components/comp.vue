<template>
  <b-tbody class="component">
    <b-tr v-for="item in paths" :key="item.id">
        <b-td class="icons text-center">
            <a v-b-modal.edit><b-icon icon="pencil-fill"></b-icon></a>
            &nbsp;
            <a @click.prevent="deletePath(item.id)"><b-icon icon="trash-fill"></b-icon></a>
        </b-td>
        <b-td scope="row">{{item.name}}</b-td>
        <b-td>{{item.path}}</b-td>
        <b-td class="icons text-center">
          <b-icon v-if="item.isActive === true" icon="check2"></b-icon>
        </b-td>
    </b-tr>
  </b-tbody>
</template>
<script>

export default {
  name: 'Comp',
  mounted () {
    this.table()
    console.log(this.$store.state.items)
  },
  data () {
    return {
      paths: []
    }
  },
  methods: {
    table () {
      this.paths = this.$store.state.items
    },
    deletePath (val) {
      fetch('http://10.1.10.201:1088/api/services/app/Paths/Delete?Id=' + val, { method: 'DELETE' })
        .then(response => response.json())
        .then(res => console.log(res))
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
