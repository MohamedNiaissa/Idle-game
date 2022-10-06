<template>
    <body>
        <div class="market">
            <div class="form">
                <div class="form__resource">
                    <label for="resource">Ressource</label>
                    <select id="resource" v-model="id" value="Choisissez une ressource">
                        <option v-for="(ressource, index) in this.ressources.data" :key="index" value={{this.ressources.data[index].id}}>{{this.ressources.data[index].name}}</option>
                    </select>
                </div>
                <div class="form__price">
                    <label for="price">Prix</label>
                    <input type="number" id="price" v-model="price">
                </div>
                <div class="form__quantity">
                    <label for="quantity">Quantité</label>
                    <input type="number" id="quantity" v-model="quantity">
                </div>
                <div class="form__submit">
                    <button @click="submit">Ajouter</button>
                </div>
            </div>
            <div class="offers">
                <OffreComp v-for="(offer, index) in this.offers" :key="index" v-bind:offers="offer" />
            </div>
            <button @click="this.getAllRessources()"> offers </button>
        </div>
    </body>
</template>

<script>
    
import { mapActions, mapState } from 'pinia'
//import useTradesStore from "../stores/trades.js"
import useRessourcesStore from "../stores/ressources.js"
import useTradesStore from "../stores/trades.js"
import OffreComp from '../components/OffreComp.vue'
export default {
    // mounted() {
    //     this.getAllResources()
    // },
    methods: {
        //...mapActions(useTradesStore, ['getAllTrades']),
        ...mapActions(useRessourcesStore, ['getAllRessources']),
        ...mapActions(useTradesStore, ['createTrade']),
        submit() {
            // this.$store.dispatch('trades/addTrade', {
            //     id: this.id,
            //     price: this.price,
            //     quantity: this.quantity
            // })
            this.createTrade({
                id: this.id,
                quantity: this.quantity,
                price: this.price
            })
        }
    },
    computed: {
        ...mapState(useRessourcesStore, ['ressources'])
    },
    components: {
        OffreComp
    },
    data() {
        //[{id: 1, name: "bitcoin",…}, {id: 2, name: "Fer",…}, {id: 3, name: "Bois",…}]
        return{
            offers: [
                {
                    id: 1,
                    name: 'Pomme',
                    price: 10,
                    quantity: 100
                },
                {
                    id: 2,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 3,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 4,
                    name: 'Pomme',
                    price: 10,
                    quantity: 100
                },
                {
                    id: 5,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 6,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                }
            ]
        }
    }
}
</script>

<style>
    .market {
        display: flex;
        justify-content: space-between;
    }
    .form {
        width: 30%;
    }
    .offers {
        width: 60%;
        display: flex;
        flex-wrap: wrap;
    }
</style>