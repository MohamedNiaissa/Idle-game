<template>
  <body>
      <div>Usines :</div>
      <div class="usineList">
      <div class="infoUsine"><img class="usine" src="../assets/Ship1.png"></div>
      <div class="infoUsine"><img class="usine" src="../assets/Ship2.png"></div>
      <div class="infoUsine"><img class="usine" src="../assets/Ship3.png"></div>
      <div class="infoUsine"><img class="usine" src="../assets/Ship4.png"></div>
      <div class="infoUsine"><img class="usine" src="../assets/Ship5.png"></div>
      <div class="infoUsine"><img class="usine" src="../assets/Ship6.png"></div>
      </div>
  </body>
</template>
<style scoped>
    .usineList{
        display: flex;
        flex-direction:column;
    }
    .usine{
        height: 126px;
        width: 150px;
    }
  </style>