import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('storage',{
  state: () => ({
    coins: 0,
    factories: [],
    offers: [],
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM"
 }),
  actions: {
    // async fetchCoins() {
    //     const { data } = await axios.get('://api.coingecko.com/api/v3/coins/list?include_platform=false')
    //     this.coins = data;
    //     console.log(this.coins);
    // },
    async fetchFactories() {
        const dataFactories  = await axios.get('http://apigame.co/factories' , {
           headers : {
            "Authorization" : "Bearer " + this.token,
            'Access-Control-Allow-Origin': '*',
           }
          })

        this.factories = dataFactories;

        console.log(this.factories);
    },
    async fetchOffers() {
      const dataOffers  = await axios.get('http://apigame.co/trades/all' , {
         headers : {
          "Authorization" : "Bearer " + this.token
         }
        })

      this.offers = dataOffers;

      console.log(this.offers);
  }
  },
})