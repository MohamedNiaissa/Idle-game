<template>
    <body>
      <UsinesComp/>
      <UsinesCreateComp/>
    </body>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import useFactoryStore from "/src/stores/factory.js"
import useRessourceStore from "/src/stores/ressources.js"
import UsinesComp from "../components/UsinesComp.vue"
import UsinesCreateComp from "../components/UsinesCreateComp.vue"
export default {
    components: {
      UsinesComp,
      UsinesCreateComp
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