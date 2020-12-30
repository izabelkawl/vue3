<template>
  <b-tbody class="component">
    <b-tr v-for="item in user.result.items" :key="item.id">
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
import userData from '../json/data.json'
export default {
  name: 'Comp',
  data () {
    return {
      user: userData,
      paths: this.$store.state.items
    }
  },
  mounted () {
    console.log(this.$store.state.items)
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
