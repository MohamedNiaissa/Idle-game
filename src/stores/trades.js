import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('trades', {
    state: () => ({
        offers: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM",
        url: "https://apigame.co/"
    }),
    actions: {
        async createTrade(id,qtt,price) {
            await axios.post(this.url+'trades',{
                "resourceId": id,
                "quantity": qtt,
                "unitPrice": price
            }, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getAllMyTrades() {
            await axios.get(this.url+'trades/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getTradeById(id) {
            await axios.get(this.url+'trades/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async deleteTradeById(id) {
            await axios.delete(this.url+'trades/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getAllTrades() {
            let dataOffers = await axios.get(this.url+'trades/all', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.offers = dataOffers;
    
            console.log(this.offers);
        }
    }
})