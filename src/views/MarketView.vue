<template>
    <body>
        <div class="market">
            <div class="form">
                <div class="form_elem form__resource">
                    <label for="resource">Ressource</label>
                    <select id="resource" v-model.number="id" value="Choisissez une ressource">
                        <option v-for="(ressource, index) in this.ressources.data" :key="index" :value='this.ressources.data[index].id'>{{this.ressources.data[index].name}}</option>
                    </select>
                </div>
                <div class="form_elem form__price">
                    <label for="price">Prix</label>
                    <input type="number" id="price" v-model.number="price">
                </div>
                <div class="form_elem form__quantity">
                    <label for="quantity">Quantité</label>
                    <input type="number" id="quantity" v-model.number="quantity">
                </div>
                <div class="form__submit">
                    <button @click="submit">Ajouter</button>
                </div>
                <div v-show="errorCreated == true">Erreur.</div>
            </div>
            <div class="offersandbtns">
                <div class="titre_et_filtre">
                    <h4 class="titre_marché">Marché</h4>
                    <div class="filtre">
                        Filtre :
                        <select name="type_factory" id="factory_type">
                            <option v-for="(ressKey,ressVal,index) in this.ressources" value="{{ressKey}}" :key="index">{{ress}}</option>
                        </select>
                    </div>
                    <button @click="refresh">Rafraichir</button>
                </div>
                <div v-if="offers.data != undefined" class="offers">
                    <OffreComp v-for="(offer, index) in offers.data.slice(p,n)" :key="index" v-bind:offer="offer" />
                </div>
                <div class="btns">
                    <button @click = "prev"> Prec </button>
                    <div>-  ( {{page}} )  -</div>
                    <button @click = "next"> Suiv </button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    
import { mapActions, mapState } from 'pinia'
import useRessourcesStore from "../stores/ressources.js"
import useTradesStore from "../stores/trades.js"
import OffreComp from '../components/OffreComp.vue'
export default {
    methods: {
        ...mapActions(useTradesStore, ['getAllTrades']),
        ...mapActions(useRessourcesStore, ['getAllRessources']),
        ...mapActions(useTradesStore, ['createTrade']),
        submit() {
            // this.$store.dispatch('trades/addTrade', {
            //     id: this.id,
            //     price: this.price,
            //     quantity: this.quantity
            // })
            try{
                this.createTrade(
                    this.id,
                    this.price,
                    this.quantity
                )
                this.errorCreated = false
            } catch (e) {
                this.errorCreated = true
            }
            this.id.value = ''
            this.price.value = ''
            this.quantity.value = ''
        },
        refresh() {
            this.getAllTrades()
            console.log(this.offers.data)
        },
        prev(){
            if(this.p > 0 ){
                this.p -= 4;
                this.n -= 4;
                this.page -= 1;
            }
        },
        next(){
            if(this.offers.data.length > this.n){
                this.p += 4;
                this.n += 4;
                this.page += 1;
            }
        }

    
    },
    computed: {
        ...mapState(useRessourcesStore, ['ressources']),
        ...mapState(useTradesStore, ['offers'])
        // offersArray() {
        //     let offersArray = [];
        //     foreach(offer in this.offers.data.length) {
        //         offersArray.push(offer)
        //     }
        //     return offersArray
        // }
    },
    components: {
        OffreComp
    },
    data() {
        //[{id: 1, name: "bitcoin",…}, {id: 2, name: "Fer",…}, {id: 3, name: "Bois",…}]
        return{
            p : 0,
            n : 4,
            errorCreated: false,
            page : 1,
        }
    },
    mounted (){
        this.getAllRessources();
        this.getAllTrades();
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
    .form_elem{
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;
        width: 80%;
    }
    .offersandbtns{
        display: flex;
        height: 70vh;
        width: 70%;
        flex-direction: column;
        align-items: center;
        border-radius: 16px;
        border-style: solid;
        background-color: rgba(0,0,140,50%);
        border-color: white;
        margin-top: 20px;
    }
    .market {
        display: flex;
        justify-content: space-evenly;
        color: black;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        width: 25%;
        border-radius: 16px;
        border-style: solid;
        background-color: rgba(0,0,140,50%);
        color: aliceblue;
    }
    .offers {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .offer{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .btns{
        position: relative;
        background-color: white;
        display: flex;
        border-radius: 10px;
    }
    .btns button{
        border-radius: 50px;
    }
    .btn_offers{
        position: relative;
        bottom: 7vh;
        width: 20%;
        left: 60vw;
    }
    label{
        font-size: 20px;
    }
</style>