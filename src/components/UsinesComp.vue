<template>
    <div>Usines :</div>
    <div v-for="(Usine,index) in factories.data" :key="index">
        <div :style="positionRandomiser">
            <img class="typeUsine" :src="Usine.model.resource.image_url">
            <p class="level">{{Usine.model.upgrade_base_value}}</p>
            <img :src="spriteSelector(Math.floor(index+1))">
                <button class="upgrade" @click="upgradeFact(index)">
                <img class="upgradeIcon" src="../assets/Upgrade.png"></button>
                <button class="sell" @click="sellFact(index)"><img class="sellIcon" src="../assets/Sell.png"></button>
            </div>
      </div>
<template>