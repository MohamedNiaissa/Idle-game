<template>
  <body>
      <h3 class="portemonnaie"> Porte Monnaie de MrLegend : {{inventory.money}} coins</h3>  
          <div class="elements">
              <div class="element"
                v-for="(key,i,index) in inventory.inventory_resources"
                :key="index">
                <div class="info_ressource">
                  <div>
                    {{key.resource.name}} </div>

                  <div> 
                    <img class="img_ressource" :src= "key.resource.image_url"/>
                   </div>
                  <div> 
                    Quantité : {{key.quantity}}
                  </div>
            
                </div>
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

  
  },
  computed: {
  ...mapState(useRessourceStore, ['inventory']),
  ...mapState(useRessourceStore, ['ressources']),
  ...mapState(useRessourceStore, ['ressource'])
  },
  mounted(){
    this.getMyInventory();
  }
}
</script>>


<style>
  .elements{
    display: flex;
    flex-wrap: wrap;
  }

  .portemonnaie{
    margin-left: 25px;
    border-radius: 16px;
    border-style: solid;
    background-color: rgba(0,0,140,50%);
    border-color: white;
    margin-top: 20px;
    width: fit-content;
    padding: 5px;
  }

  .element{
    margin: 22px;
    padding: 22px;
    border-radius: 16px;
    border-style: solid;
    background-color: rgba(0,0,140,50%);
    border-color: white;
    margin-top: 20px;
  }
  .img_ressource{
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