<template>
    <div :style="fondResource(offer.resource.image_url)" class="offer">
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
        <div class="offer__buy">
            <button @click="buy(offer)">Acheter</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            offer: {
                type: Array,
                required: true
            }
        },
        methods: {
            buy(offer) {
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
    .offer div{
        margin-bottom: -5px;
    }
    .offer__name{
        font-weight: bold;
        font-size: 20px;
    }
</style>