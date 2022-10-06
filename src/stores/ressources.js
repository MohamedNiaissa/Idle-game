import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('ressources', {
    state: () => ({
        coins: 0,
        factories: [],
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


        async createRessource(name_resource,img_ressource_url,base_value_ressource) {
            await axios.post('http://apigame.co/ressources', { name : name_resource, image_url: img_ressource_url, base_value: base_value_ressource}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async getAllRessources() {
            await axios.get('http://apigame.co/ressources', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getRessouorceById(id) {
            await axios.get('http://apigame.co/ressources/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        }
    }
})