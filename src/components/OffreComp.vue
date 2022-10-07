<template>
    <div class="offer">
        <div class="offer__name">
            {{offer.resource.name}}
        </div>
        <div class="offer__owner">
            Vendeur: {{offer.owner.username}}
        </div>
        <div class="offer__quantity">
            Quantité: {{offer.quantity}} unités
        </div>
        <div class="offer__price">
            Prix: {{offer.unitPrice}} coins
        </div>
        <div class="offer__buy__and__suppr">
            <button @click="buy(offer,offer.id,offer.quantity)">Acheter</button>
            <button @click="deleteTradeById(offer.id)" class="btn_suppr" v-show="offer.owner.username == 'MrLegend'">Supprimer</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'pinia';
import useTradesStore from "../stores/trades.js"
    export default {
        props: {
            offer: {
                type: Array,
                required: true
            }
        },
        methods: {
            ...mapActions(useTradesStore, ['buyRessource']),
            ...mapActions(useTradesStore, ['deleteTradeById']),
            buy(offer,id,qt) {
                this.buyRessource(id,qt)
                console.log(offer)
                console.log(offer.id)
            },




        }
    }
</script>

<style>
    .offer{
        width: 32%;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgb(240, 240, 240);
        border-radius: 30px;
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
        margin: 30px;
        margin-top: 0px;
    }
    .offer div{
        margin-bottom: -5px;
    }
    .offer__name{
        font-weight: bold;
        font-size: 20px;
    }
    .btn_suppr{
        background-color: rgba(246, 19, 19, 0.6);
    }
</style>