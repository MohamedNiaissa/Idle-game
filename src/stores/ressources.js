import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('ressources', {
    state: () => ({
        coins: 0,
        ressources: [],
        ressource: "",
        inventory: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjUxMjczNjIsImV4cCI6MTY2NTczMjE2Mn0.jVXrDwvq215wF1d_TAB5ULEHy1LTSV9LRFoB6pFQTTs"
    }),
    actions: {
        // Inventory
        async getMyInventory() {
            const dataInventory = await axios.get('http://apigame.co/inventory/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })

            this.inventory = dataInventory.data;

            console.log(this.inventory)
        },
        // Ressources
        async createRessource(id) {
            await axios.post('http://apigame.co/users/factories/' + id, {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getAllRessources() {
            const dataRessources = await axios.get('http://apigame.co/resources', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.ressources = dataRessources;
        },
        async getRessourceById(id) {
            const dataRessource = await axios.get('http://apigame.co/resources/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })

            this.ressource = dataRessource.data
        }
    }
})