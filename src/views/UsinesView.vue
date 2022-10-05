<template>

  <body>
    <div>Usines :)</div>

    <button @click="this.fetchFactories()"> hey </button>
  </body>
</template>

<script>
import { mapActions } from 'pinia'
import useFactoryStore from "../stores/factory.js"

export default {
  methods: {
    // printFactories() {
    //   console.log(this.fetchFactories())
      
    // },
    ...mapActions(useFactoryStore, ['fetchFactories'])
  }
}

</script>