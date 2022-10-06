<template>
    <div class="offer">
        <div class="offer__name">
            {{offers.name}}
        </div>
        <div class="offer__price">
            {{offers.price}}
        </div>
        <div class="offer__quantity">
            {{offers.quantity}}
        </div>
        <div class="offer__buy">
            <button @click="buy(offer)">Acheter</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            offers: String
        },
        methods: {
            buy(offer) {
                console.log(offer)
            }
        }
    }
</script>

<style>
    .offer{
        width: 30%;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgb(240, 240, 240);
        border-radius: 30px;
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
        margin: 30px;
    }
</style>