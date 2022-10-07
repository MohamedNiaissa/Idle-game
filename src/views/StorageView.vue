<template>

  <body>
    <h3> Porte Monnaie de MrLegend : {{inventory.money}} coins</h3>
    <div class="elements">
      <div class="element" v-for="(key,i,index) in inventory.inventory_resources" :key="index">
        <div class="info_ressource">
          <div>
            {{key.resource.name}} </div>

          <div>
            <img class="img_ressource" :src="key.resource.image_url" />
          </div>
          <div>
            Quantité : {{key.quantity}}
          </div>

        </div>
      </div>
      <div class="btns">
        <button @click="prev"> Prec </button>
        <button @click="next"> Suiv </button>
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
    ...mapActions(useRessourceStore, ['getRessourceById']),
    prev() {
      if (this.p > 0) {
        this.p -= 4;
        this.n -= 4;
        console.log(this.p, this.n)
      }
    },
    next() {
      if (this.inventory.inventory_resources.length > this.n) {
        this.p += 4;
        this.n += 4;
        console.log(this.p, this.n)
      }
    }
  },
    computed: {
      ...mapState(useRessourceStore, ['inventory']),
      ...mapState(useRessourceStore, ['ressources']),
      ...mapState(useRessourceStore, ['ressource'])
    },
    mounted() {
      this.getMyInventory();
    },

  }
</script>>


<style>
.elements {
  display: flex;
  flex-wrap: wrap;
}

.element {
  margin: 22px;
  padding: 22px;
  background-color: rgb(0 0 139 / 50%);
}

.img_ressource {
  width: 90px;
}
</style>
<!-- getNameOfRessource(id){

  for(let i = 0; i < this.ressources.data.length; i++){
    if(this.ressources.data[i].id == id){
      this.ressourceName = this.ressources.data[i].name; 
      return this.ressources.data[i].name
    }
  }

} -->