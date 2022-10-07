<template>
  <body>
      <div>Usines :</div>
      <button @click='formUsine(true)'>Créer une usine</button>
      <div v-for="(Usine,index) in factories.data" :key="index">
        <div :style="positionRandomiser(Usine.id)">
            {{Usine.model.upgrade_base_value}}
            <img class="typeUsine" :src="Usine.model.resource.image_url">
            <img :src="spriteSelector(Math.floor(index+1))">
                <button class="upgrade" @click="upgradeFact(index)">
                <img class="upgradeIcon" src="../assets/Upgrade.png"></button>
                <button class="sell" @click="sellFact(index)"><img class="sellIcon" src="../assets/Sell.png"></button>
            </div>
      </div>
      <form @submit.prevent="createFact" v-show="create">
        <div class="usineList">
            <div v-for="(Ressource,index) in ressources.data" :key="index" class="infoUsine">{{Ressource.name}}<img class="usine" :src="Ressource.image_url"><input @click="actualRessource(index)" type="radio" name="typeOfFact" :value="Ressource.id" v-model="type"></div>
            <input type="submit" class="createButton" :value="typeRessource">
            <button type="button" @click="formUsine(false)">Ne pas créer</button>
        </div>
      </form>
  </body>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import useFactoryStore from "/src/stores/factory.js"
import useRessourceStore from "/src/stores/ressources.js"
export default {
  data() {
      return {
          create: false,
          oldtype: 0,
          type: 0,
          typeRessource: "Créer usine : ?",
      }
  },
  created() {
    this.fetchFactories();
  },
  computed: {
    ...mapState(useFactoryStore, ['factories']),
    ...mapState(useRessourceStore, ['ressources']),
    ...mapState(useFactoryStore, ['factoryCoords']),
    FactoryList()
    {
        this.fetchFactories();
        return this.factories.data;
    }
  },
  methods: {
    ...mapActions(useFactoryStore, ['fetchFactories']),
    ...mapActions(useFactoryStore, ['createFactory']),
    ...mapActions(useRessourceStore, ['getAllResources']),
    positionRandomiser(id)
    {
        if(this.factoryCoords[id] == undefined){
            let X = parseInt((Math.random()*80)+10)
            let Y = parseInt((Math.random()*80)+10)
            let style = String("position: absolute;left:"+X+"vw;top:"+Y+"vh;")
            this.factoryCoords[id] = style
            return style;
        }else{
            let style = this.factoryCoords[id]
            return style;
        }
    },
    formUsine(statut)
    {
        this.getAllResources();
        this.create = statut;
    },
    createFact()
    {
        this.createFactory(parseInt(this.type));
        this.type = 0;
        this.formUsine(false);
        this.fetchFactories();
    },
    actualRessource(index)
    {
        this.typeRessource = "Créer usine :" + this.ressources.data[index].name;
        if (this.typeRessource == "Créer usine : ?")
        {
            this.typeRessource = "Créer usine : ?";
        }
    },
    spriteSelector(index)
    {
        let search = "Ship"+index+".png"
        return search;
    },
  }
}

</script>
<style scoped>
    .usineList{
        display: flex;
        flex-direction:column;
        position: absolute;
        left: 37.5vw;
        width: 25vw;
        z-index: 1;
        border-radius: 16px;
        border-style: solid;
        background-color: rgba(0,0,140,50%);
        border-color: white;
    }
    .usine{
        height: 63px;
        width: 75px;
    }
    .infoUsine{
        display: flex;
        justify-content: center;
    }
    .createButton{
        background-color: rgba(0,0,140,50%);
        border-color: white;
        border-radius: 16px;
        color: white;
        width: 50%;
        position: relative;
        left: 25%;
    }
    .typeUsine{
        position:absolute;
        bottom:0px;
        width:32px;
        height:32px;
    }
    .upgrade{
        background-color: rgba(0,0,0,100%);
        border-color: white;
        border-radius: 16px;
        position: absolute;
        right:-16px;
        top:0px;
        display: flex;
        justify-content: center;
    }
    .upgradeIcon{
        width: 16px;
        height: 16px;
    }
    .sell{
        background-color: rgba(0,0,0,0%);
        border-color: white;
        border-radius: 16px;
        position: absolute;
        right:-16px;
        bottom:0px;
        display: flex;
        justify-content: center;
    }
    .sellIcon{
        width: 16px;
        height: 16px;
    }
  </style>