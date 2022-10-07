<template>
  <body>
      <div>Entrepôt :</div>
          <div>
              <div
                v-for="(key,i,index) in inventory"
                :key="index">
                <span v-if="index == 1">
                    <h3> Porte Monnaie de MLegend : {{key}} coins</h3>
                </span> <br/>
              </div>
          </div>
  </body>
  </template>
<script>
  import { mapActions, mapState } from 'pinia'
  import useRessourceStore from "/src/stores/ressources.js"
  export default {
  methods: {
  ...mapActions(useRessourceStore, ['getMyInventory']),
  ...mapActions(useRessourceStore, ['getAllRessources'])
  },
  computed: {
  ...mapState(useRessourceStore, ['inventory']),
  ...mapState(useRessourceStore, ['ressources'])
  },
  mounted(){
    this.getMyInventory();
    this.getAllRessources();

  }
}
</script>>