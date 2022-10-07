import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('trades', {
    state: () => ({
        offers: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjUxMjczNjIsImV4cCI6MTY2NTczMjE2Mn0.jVXrDwvq215wF1d_TAB5ULEHy1LTSV9LRFoB6pFQTTs"
    }),
    actions: {
        async createTrade(id,qtt,price) {
            await axios.post('http://apigame.co/trades',{
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
            await axios.get('http://apigame.co/trades/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getTradeById(id) {
            await axios.get('http://apigame.co/trades/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async deleteTradeById(id) {
            await axios.delete('http://apigame.co/trades/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getAllTrades() {
            let dataOffers = await axios.get('http://apigame.co/trades/all', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.offers = dataOffers;
    
            console.log(this.offers);
        }
    }
})