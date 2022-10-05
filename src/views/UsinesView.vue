<template>

  <body>
    <div>Usines :)</div>

    <button @click="this.fetchFactories()"> hey </button>
  </body>
</template>

<script>
import { mapActions } from 'pinia'
import useStorageStore from "../stores/storage.js"

export default {
  methods: {
    // printFactories() {
    //   console.log(this.fetchFactories())
      
    // },
    ...mapActions(useStorageStore, ['fetchFactories'])
  }
}

</script>