import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('factory', {
    state: () => ({
        coins: 0,
        factories: [],
        factoryCoords: {},
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjUxMjczNjIsImV4cCI6MTY2NTczMjE2Mn0.jVXrDwvq215wF1d_TAB5ULEHy1LTSV9LRFoB6pFQTTs",
        url: "https://apigame.co/"
    }),
    actions: {

        async fetchFactories() {
            const dataFactories = await axios.get(this.url+'factories', {
                headers: {
                    "Authorization": "Bearer " + this.token,
                    'Access-Control-Allow-Origin': '*',
                }
            })

            this.factories = dataFactories;
            console.log(this.factories);
        },
        async buyFactoryLimit() {
            await axios.post(this.url+'users/buy-factory-limit', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getFactoryLimit() {
            let limitData = await axios.get(this.url+'users/factory-limit', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
            this.limit = limitData;
        },
        async createFactory(modelId) {
            await axios.post(this.url+'factories', { factory_model: modelId }, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async getFactoryById(id) {
            await axios.get(this.url+'factories/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async deleteFactoryById(id) {
            await axios.delete(this.url+'factories/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async levelUpFactory(id) {
            await axios.post(this.url+'factories/' + id + '/levelup', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        // Factories-Models

        async getAllFactoriesModels() {
            await axios.get(this.url+'factories/models', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },


        async createModelFactory() {
            await axios.post(this.url+'factories/models', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async deleteFactoryModelById(id) {
            await axios.delete(this.url+'factories/models/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
    }

})