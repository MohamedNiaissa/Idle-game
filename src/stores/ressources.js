import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('ressources', {
    state: () => ({
        coins: 0,
        ressources: [],
        inventory: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM",
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