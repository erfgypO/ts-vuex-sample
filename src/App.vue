<script lang="ts">
import {mapActions, mapGetters} from "vuex";
import {defineComponent} from "vue";
export default defineComponent({
  name: 'App',
  components: {
  },
  computed: {
    ...mapGetters('client', ['getClients', 'getConfirmedClients', 'getClientCount'])
  },
  methods: {
    ...mapActions('client', ['loadClients'])
  }
})
</script>

<template>
  <main>
    <button @click="loadClients">Load Clients</button>

    <h1>All clients</h1>
    <span>Total: {{ getClientCount }}</span>
    <ul>
      <li v-for="client of getClients" :key="client.id">{{ client.name }}</li>
    </ul>

    <h1>Confirmed Clients</h1>
    <ul>
      <li v-for="client of getConfirmedClients" :key="client.id">{{ client.name }}</li>
    </ul>
  </main>
</template>

<style scoped>

</style>
