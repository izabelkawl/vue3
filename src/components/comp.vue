<template>
  <b-tbody class="component">
    <b-tr v-for="item in paths" :key="item.id">
        <b-td class="icons text-center">
          <b-icon icon="pencil-fill"></b-icon>
          &nbsp;
          <b-icon icon="trash-fill"></b-icon>
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
//
export default {
  name: 'Comp',
  data () {
    return {
      paths: this.$store.state.items
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
