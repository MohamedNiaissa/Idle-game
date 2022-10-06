<template>
  <body>
      <div>Usines :</div>
      <button @click='formUsine'>Créer une usine</button>
      <form v-if="create">
        <div class="usineList">
            <div class="infoUsine"><img class="usine" src="../assets/Ship1.png"><input type="radio" :name="typeOfFact" value="Biomasse" v-model="type"></div>
            <div class="infoUsine"><img class="usine" src="../assets/Ship2.png"><input type="radio" :name="typeOfFact" value="Batterie plasma" v-model="type"></div>
            <div class="infoUsine"><img class="usine" src="../assets/Ship3.png"><input type="radio" :name="typeOfFact" value="Arme" v-model="type"></div>
            <div class="infoUsine"><img class="usine" src="../assets/Ship4.png"><input type="radio" :name="typeOfFact" value="Cristaux solaires" v-model="type"></div>
            <div class="infoUsine"><img class="usine" src="../assets/Ship5.png"><input type="radio" :name="typeOfFact" value="Eau" v-model="type"></div>
            <div class="infoUsine"><img class="usine" src="../assets/Ship6.png"><input type="radio" :name="typeOfFact" value="Antimatière" v-model="type"></div>
            <button class="createButton">Créer l'usine de {{typeRessource}}</button>
        </div>
      </form>
      {{FactoryList}}
  </body>
</template>

<script>
import { mapActions } from 'pinia'
import useFactoryStore from "/src/stores/factory.js"
export default {
  data() {
      return {
          create: false,
          typeRessource: "?",
      }
  },
  methods: {
    ...mapActions(useFactoryStore,['fetchFactories']),
    ...mapActions(useFactoryStore,['createFactory']),
    formUsine()
    {
        this.create = true;
    }
  },
  computed: {
    FactoryList()
    {
        return this.fetchFactories()
    }
  }
}

</script>
<style scoped>
    .usineList{
        display: flex;
        flex-direction:column;
        justify-content:center;
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
        width: 50%;
    }
  </style>