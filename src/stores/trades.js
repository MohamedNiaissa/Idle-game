import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('trades', {
    state: () => ({
        coins: 0,
        factories: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM"
    }),
    actions: {
        
        async createTrade() {
            await axios.post('http://apigame.co/trades',{}, {
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
            await axios.get('http://apigame.co/trades/all', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        }
    }
})