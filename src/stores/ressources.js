import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('ressources', {
    state: () => ({
        coins: 0,
        ressources: [],
        inventory: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjUxMjczNjIsImV4cCI6MTY2NTczMjE2Mn0.jVXrDwvq215wF1d_TAB5ULEHy1LTSV9LRFoB6pFQTTs",
        url: "https://apigame.co/"
    }),
    actions: {
        // Inventory
        async getMyInventory() {
            const dataInventory = await axios.get(this.url+'inventory/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })

            this.inventory = dataInventory.data;

            console.log(this.inventory)
        },
        // Ressources
        async createRessource(id) {
            await axios.post(this.url+'users/factories/' + id, {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getAllRessources() {
            const dataRessources = await axios.get(this.url+'resources', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.ressources = dataRessources;
        },
        async getRessourceById(id) {
            await axios.get(this.url+'resources/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        }
    }
})