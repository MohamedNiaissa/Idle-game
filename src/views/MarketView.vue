<template>
    <body>
        <div class="market">
            <div class="form">

            </div>
            <div class="offers">
                <OffreComp v-for="(offer, index) in this.offers" :key="index" v-bind:offers="offer" />
            </div>
            <button @click="this.fetchOffers()"> offers </button>
        </div>
    </body>
</template>

<script>
import { mapActions } from 'pinia'
import useStorageStore from "../stores/storage.js"
import OffreComp from '../components/OffreComp.vue'
export default {
    methods: {
        //...mapActions('storage', ['fetchOffers']),
        ...mapActions(useStorageStore, ['fetchOffers'])
    },
    computed: {
        //...mapStates('storage', ['offers'])
    },
    components: {
        OffreComp
    },
    data() {
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
                    id: 2,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                }
            ]
        }
    }
}
</script>