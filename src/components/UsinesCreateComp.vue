<template>
    <button @click='formUsine(true)'>Créer une usine</button>
    <form @submit.prevent="createFact" v-show="create">
        <div class="usineList">
            <div v-for="(Ressource,index) in ressources.data" :key="index" class="infoUsine">{{Ressource.name}}<img class="usine" :src="Ressource.image_url"><input @click="actualRessource(index)" type="radio" name="typeOfFact" :value="Ressource.id" v-model="type"></div>
            <input type="submit" class="createButton" :value="typeRessource">
            <button type="button" @click="formUsine(false)">Ne pas créer</button>
        </div>
    </form>
</template>