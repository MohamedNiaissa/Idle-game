import { defineStore } from 'pinia'
import axios from 'axios'

export const useResources = defineStore('resources', {
    state: () => ({
        coins: 0,
        factories: [],
        inventory: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM"
    }),
    getters: {
        // getResources(state){
        //     return state.resources.length
        // }
        getResources() {
            console.info(this.inventory.length);
        }
    },
    actions: {
        // Inventory

        async getMyInventory() {

            const inventoryData = await axios.get('http://apigame.co/inventory/my', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.inventory = inventoryData
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
            const dataResources =  await axios.get('http://apigame.co/resources', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.inventory = dataResources.data;
            console.log(this.inventory);
        },

        async getRessouorceById(id) {
            await axios.get('http://apigame.co/resources/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
    }
})