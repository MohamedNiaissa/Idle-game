<template>
    <button class="createForm" @click='formUsine(true)'>Créer une usine</button>
    <form @submit.prevent="createFact" v-show="create">
        <div class="usineList">
            <img :src="spriteSelector(Math.floor(verifIndex+1))">
            <div v-for="(Ressource,index) in ressources.data" :key="index" class="infoUsine">{{Ressource.name}}<img class="usine" :src="Ressource.image_url"><input @click="actualRessource(index)" type="radio" name="typeOfFact" :value="Ressource.id" v-model="type"></div>
            <input type="submit" class="createButton" :value="typeRessource">
            <button class="createButton" type="button" @click="formUsine(false)">Ne pas créer</button>
        </div>
    </form>
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
  },
  methods: {
    ...mapActions(useFactoryStore, ['fetchFactories']),
    ...mapActions(useFactoryStore, ['createFactory']),
    ...mapActions(useFactoryStore, ['getAllFactoriesModels']),
    ...mapActions(useRessourceStore, ['getAllRessources']),
    formUsine(statut)
    {
        this.getAllRessources();
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
    }
  },
  computed: {
    ...mapState(useFactoryStore, ['factories']),
    ...mapState(useRessourceStore, ['ressources']),
    verifIndex()
    {
        if(this.factories.data){
            return this.factories.data.length;
        }
        return 0;
    }
  }
}

</script>
<style scoped>
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
        font-size: 15px;
    }
  </style>