<script lang="ts">
import {mapActions, mapGetters} from "vuex";
import {defineComponent} from "vue";
export default defineComponent({
  name: 'App',
  components: {
  },
  computed: {
    ...mapGetters('client', ['getClientId', 'getClientName', 'getClientStatus'])
  },
  methods: {
    ...mapActions('client', ['loadClient'])
  }
})
</script>

<template>
  <main>
    <button @click="loadClient">Load Client</button>
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <td>{{ getClientId }}</td>
        </tr>
      <tr>
        <th>Name</th>
        <td>{{ getClientName }}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td>{{ getClientStatus }}</td>
      </tr>
      </tbody>
    </table>

  </main>
</template>

<style scoped>
th {
  text-align: left;
  font-weight: bolder;
}

td {
  text-align: right;
}
</style>
