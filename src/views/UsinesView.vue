<template>
    <body>
        <button class="buttonAdd" @click="increaseLimit">Augmenter le nombre d'usines maximales</button>
          <div v-if="factories.data">
              <div v-for="(Usine,index) in factories.data" :key="index">
                  <div :style="positionRandomiser(Usine.id)">
                      <img class="typeUsine" :src="Usine.model.resource.image_url">
                      <p class="level">{{Usine.level}}</p>
                      <img class="ship" :src="spriteSelector(Math.floor(index+1))">
                          <button class="upgrade" @click="upgradeFact(Usine.id)">
                          <img class="upgradeIcon" src="../assets/Upgrade.png"></button>
                          <p class="upgradeInfo">{{Usine.level**Usine.model.upgrade_coef}}:{{Usine.model.upgrade_resource.name}}</p>
                          <button class="sell" @click="sellFact(Usine.id)"><img class="sellIcon" src="../assets/Sell.png"></button>
                      </div>
                </div>
            </div>
      <button class="createForm" @click='formUsine(true)'>Créer une usine</button>
          <form @submit.prevent="createFact" v-show="create">
              <div class="usineList">
                  <img class="ship" :src="spriteSelector(Math.floor(verifIndex+1))">
                  <div v-for="(model,index) in models.data" :key="index" class="infoUsine">{{model.resource.name}}<img class="usine" :src="model.resource.image_url"><input @click="actualRessource(index)" type="radio" name="typeOfFact" :value="model.id" v-model="type"></div>
                  <input type="submit" class="createButton" :value="typeRessource">
                  <button class="createButton" type="button" @click="formUsine(false)">Ne pas créer</button>
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
            type: 0,
            typeRessource: "Créer usine : ?",
        }
    },
  created() {
    this.fetchFactories();
    this.getFactoryLimit();
  },
  methods: {
    ...mapActions(useFactoryStore, ['fetchFactories']),
    ...mapActions(useFactoryStore, ['getFactoryLimit']),
    ...mapActions(useFactoryStore, ['buyFactoryLimit']),
    ...mapActions(useFactoryStore, ['levelUpFactory']),
    ...mapActions(useFactoryStore, ['deleteFactoryById']),
    ...mapActions(useFactoryStore, ['createFactory']),
    ...mapActions(useFactoryStore, ['getAllFactoriesModels']),
    ...mapActions(useRessourceStore, ['getAllRessources']),
    upgradeFact(index)
    {
        this.levelUpFactory(index);
        this.$router.go("/")
    },
    sellFact(index)
    {
        this.deleteFactoryById(index);
        this.$router.go("/")
    },
    increaseLimit()
    {
        this.buyFactoryLimit();
        this.$router.go("/")
    },
    spriteSelector(index)
    {
        let search = "Ship"+index+".png";
        return search;
    },
    formUsine(statut)
      {
          this.getAllRessources();
          this.getAllFactoriesModels();
          this.create = statut;
      },
      createFact()
      {
          this.createFactory(parseInt(this.type));
          this.type = 0;
          this.formUsine(false);
          this.fetchFactories();
          this.$router.go("/")
      },
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
      actualRessource(index)
      {
          this.typeRessource = "Créer usine :" + this.ressources.data[index].name;
          if (this.typeRessource == "Créer usine : ?")
          {
              this.typeRessource = "Créer usine : ?";
          }
      }
  },
  computed: {
    ...mapState(useFactoryStore, ['factories']),
    ...mapState(useFactoryStore, ['factoryCoords']),
    ...mapState(useFactoryStore, ['limit']),
    ...mapState(useFactoryStore, ['models']),
    ...mapState(useRessourceStore, ['ressources']),
    verifIndex()
      {
          if(this.factories.data){
              return this.factories.data.length;
          }
          return 0;
      },
  }
}

</script>
<style scoped>
    .usineList
    {
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
    .usine
    {
        height: 63px;
        width: 75px;
    }
    .infoUsine
    {
        display: flex;
        justify-content: center;
    }
    .typeUsine
    {
        position:absolute;
        bottom:0px;
        width:32px;
        height:32px;
    }
    .upgrade
    {
        background-color: rgba(0,0,0,100%);
        border-color: white;
        border-radius: 16px;
        position: absolute;
        right:-16px;
        top:0px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .upgradeIcon
    {
        width: 16px;
        height: 16px;
    }
    .sell
    {
        background-color: rgba(0,0,0,0%);
        border-color: white;
        border-radius: 16px;
        position: absolute;
        right:-16px;
        bottom:0px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .sellIcon
    {
        width: 16px;
        height: 16px;
    }
    .buttonAdd
    {
        background-color: rgba(0,0,140,50%);
        border-radius: 16px;
        color: white;
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
    .createForm{
      background-color: rgba(0,0,140,50%);
      border-radius: 16px;
      color: white;
    }
    .ship{
        width: 64px;
        height: 64px;
    }
    .level{
        position: absolute;
        margin-top: 0px;
    }
    .upgradeInfo{
        position : absolute;
        left:80px;
        top:-16px;
    }
  </style>