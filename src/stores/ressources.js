import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('ressources', {
    state: () => ({
        ressources: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM"
    }),
    actions: {
        // Inventory

        async getMyInventory() {
            await axios.get('http://apigame.co/inventory/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        // Ressources

        async createRessource(id) {
            await axios.post('http://apigame.co/users/factories/' + id, {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async getAllResources() {
            let ressourcesData = await axios.get('http://apigame.co/resources', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.ressources = ressourcesData
            console.log(this.ressources)
        },
        async getRessouorceById(id) {
            await axios.get('http://apigame.co/resources/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        }
    }
})