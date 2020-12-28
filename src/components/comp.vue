<template>
  <b-tbody>
    <b-tr v-for="user in data.result.items" :key="user.id">
        <b-td class="icons text-center">
          <b-icon icon="pencil-fill"></b-icon>
          &nbsp;
          <b-icon icon="trash-fill"></b-icon>
        </b-td>
        <b-td scope="row">{{user.name}}</b-td>
        <b-td>{{user.path}}</b-td>
        <b-td class="icons text-center">
          <b-icon v-if="user.isActive === true" icon="check2"></b-icon>
        </b-td>
    </b-tr>
  </b-tbody>
</template>

<script>
import userData from '../json/data.json'
export default {
  data () {
    return {
      data: userData
    }
  }
}

</script>

<style lang="scss">
.icons {
  color:#2b3c7f;
}
</style>
