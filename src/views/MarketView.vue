<template>
    <body>
        <div class="market">
            <div class="form">

            </div>
            <div class="offers">
                <OffreComp v-for="(offer, index) in this.offers" :key="index" v-bind:offers="offer" />
            </div>
            <button @click="this.getAllTrades()"> offers </button>
        </div>
    </body>
</template>

<script>
import { mapActions } from 'pinia'
import useTradesStore from "../stores/trades.js"
import OffreComp from '../components/OffreComp.vue'
export default {
    methods: {
        ...mapActions(useTradesStore, ['getAllTrades'])
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