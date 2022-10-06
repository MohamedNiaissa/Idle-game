<template>
  <body>
      <div>Usines :</div>
      <button @click='formUsine(true)'>Créer une usine</button>
      <form @submit.prevent="createFact" v-if="create">
        <div class="usineList">
            <div v-for="(Ressource,index) in listRessource" class="infoUsine"><img class="usine" src="">{{Ressource[index]}}<input type="radio" name="typeOfFact" value="1" v-model="type"></div>
            <input type="submit" class="createButton">Créer l'usine: {{typeRessource}}
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
          listRessource: []
      }
  },
  methods: {
    ...mapActions(useFactoryStore,['fetchFactories']),
    ...mapActions(useFactoryStore,['createFactory']),
    ...mapActions(useRessourceStore, ['getAllRessources']),
    formUsine(statut)
    {
        this.create = statut;
        this.RessourceList();
    },
    createFact()
    {
        this.createFactory(parseInt(this.type));
        this.formUsine(false);
    },
    RessourceList()
    {
        this.getAllRessources();
        this.listRessource = this.ressources.data;
    },
  },
  computed: {
    ...mapState(useFactoryStore, ['factories']),
    ...mapState(useRessourceStore, ['ressources']),
    FactoryList()
    {
        this.fetchFactories();
        return this.factories.data;
    },
    typeRessource()
    {
        if (this.type==1)
        {
            return "Bitcoin";
        }
        if (this.type==2)
        {
            return "Fer";
        }
        if (this.type==3)
        {
            return "Bois";
        }
        return "?";
    }
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
        border-color: white>;
        border-radius: 16px;
        color: white;
        width: 50%;
        position: relative;
        left: 25%;
    }
  </style>