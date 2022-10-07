<template>
    <div :style="fondResource(offer.resource.image_url)" class="offer">
        <div class="offer__name">
            {{offer.resource.name}}
        </div>
        <div class="name_seller">
            Vendeur : {{ offer.owner.username }}
        </div>
        <div class="offer__quantity">
            Quantité: {{offer.quantity}} unités
        </div>
        <div class="offer__price">
            Prix: {{offer.unitPrice}} coins
        </div>
        <div class="offer__buy">
            <button @click="buy(offer,offer.inventory.id,offer.quantity)">Acheter</button>
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
            buy(offer,id,qt) {
                this.buyRessource(id,qt)
                console.log(offer)
            },
            fondResource(url)
            {
                return "background-image:"+url+";"
            }
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
</style>