<template>
    <body>
        <div class="market">
            <div class="form">
                <div class="form_elem form__resource">
                    <label for="resource">Ressource</label>
                    <select id="resource" v-model="id" value="Choisissez une ressource">
                        <option v-for="(ressource, index) in this.ressources.data" :key="index" value={{this.ressources.data[index].id}}>{{this.ressources.data[index].name}}</option>
                    </select>
                </div>
                <div class="form_elem form__price">
                    <label for="price">Prix</label>
                    <input type="number" id="price" v-model="price">
                </div>
                <div class="form_elem form__quantity">
                    <label for="quantity">Quantité</label>
                    <input type="number" id="quantity" v-model="quantity">
                </div>
                <div class="form__submit">
                    <button @click="submit">Ajouter</button>
                </div>
            </div>
            <div class="ligne"></div>
            <div class="offersandbtns">
                <div class="titre_et_filtre">
                    <h4 class="titre_marché">Marché</h4>
                    <div class="filtre">
                        Filtre :
                        <!-- <select name="type_factory" id="factory_type">
                            <option v-for="(ress,index) in this.ressources" value="{{ress}}" :key="index">{{ress}}</option>
                        </select> -->
                    </div>
                </div>
                <div class="offers">
                    <OffreComp v-for="(offer, index) in this.offers.slice(p,n)" :key="index" v-bind:offers="offer" />
                </div>
                <div class="btns">
                    <button @click = "prev"> Prec </button>
                    <button @click = "next"> Suiv </button>
                </div>
            </div>
        </div>
        <button class="btn_offers" @click="this.getAllRessources()"> Faire une offre </button>
    </body>
</template>

<script>
    
import { mapActions, mapState } from 'pinia'
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
        },
        prev(){
            
            if(this.p > 0 ){
                this.p -= 4;
                this.n -= 4;
                console.log(this.p,this.n)
            }
        },
        next(){
            if(this.offers.length > this.n){
                this.p += 4;
                this.n += 4;
                console.log(this.p,this.n)
            }
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
            p : 0,
            n : 4,
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
                },
                {
                    id: 7,
                    name: 'Frase',
                    price: 10,
                    quantity: 100
                },
                {
                    id: 8,
                    name: 'Poire',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 9,
                    name: 'Banane',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 10,
                    name: 'Peche',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 11,
                    name: 'Pasteque',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 12,
                    name: 'Mangue',
                    price: 20,
                    quantity: 200
                },
                {
                    id: 13,
                    name: 'Kiwi',
                    price: 20,
                    quantity: 200
                }
            ]
        }
    }
}
</script>

<style>
    .titre_et_filtre{
        display: flex;
        align-items: center;
    }
    .filtre{
        color: aliceblue;
        margin-left: 30px;
    }
    .titre_marché{
        color: aliceblue;
        text-align: center;
    }
    .ligne{
        width: 2px;
        height: 88vh;
        background-color: aliceblue;
    }
    .form_elem{
        display: flex;
        margin-bottom: 20px;
    }
    .offersandbtns{
        display: flex;
        height: 70vh;
        width: 60%;
        flex-direction: column;
        align-items: center;
        border-radius: 16px;
        border-style: solid;
        background-color: rgba(0,0,140,50%);
        border-color: white;
    }
    .market {
        display: flex;
        justify-content: space-between;
        color: black;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        height: 30vh;
        width: 30%;
        border-radius: 16px;
        border-style: solid;
        background-color: rgba(0,0,140,50%);
        color: aliceblue;
    }
    .offers {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .offer{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .btns{
        position: relative;
    }
    .btn_offers{
        position: relative;
        bottom: 7vh;

    width: 20%;
    left: 60vw;
    }
</style>