<template>
    <div>Usines : <p v-if="factories.data">{{limit}}/{{factories.data.length}}</p><button class="buttonAdd" @click="increaseLimit">Augmenter le nombre d'usine maximale</button></div>
    <div v-for="(Usine,index) in factories.data" :key="index">
        <div :style="positionRandomiser">
            <img class="typeUsine" :src="Usine.model.resource.image_url">
            <p class="level">{{Usine.model.upgrade_base_value}}</p>
            <img :src="spriteSelector(Math.floor(index+1))">
                <button class="upgrade" @click="upgradeFact(Usine.id)">
                <img class="upgradeIcon" src="../assets/Upgrade.png"></button>
                <button class="sell" @click="sellFact(Usine.id)"><img class="sellIcon" src="../assets/Sell.png"></button>
            </div>
      </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import useFactoryStore from "/src/stores/factory.js"
import useRessourceStore from "/src/stores/ressources.js"
export default {
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
    upgradeFact(index)
    {
        this.levelUpFactory(index);
    },
    sellFact(index)
    {
        this.deleteFactoryById(index);
    },
    increaseLimit()
    {
        this.buyFactoryLimit();
    },
    spriteSelector(index)
    {
        let search = "Ship"+index+".png";
        return search;
    }
  },
  computed: {
    ...mapState(useFactoryStore, ['factories']),
    ...mapState(useFactoryStore, ['limit']),
    ...mapState(useRessourceStore, ['ressources']),
    positionRandomiser()
    {
        let X = parseInt((Math.random()*80)+10);
        let Y = parseInt((Math.random()*80)+10);
        let style = "position: absolute;left:"+X+"vw;top:"+Y+"vh;"
        return style;
    }
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
  </style>