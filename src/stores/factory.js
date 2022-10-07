import { defineStore } from 'pinia'
import axios from 'axios'


export default defineStore('factory', {
    state: () => ({
        coins: 0,
        factories: [],
        factoryCoords: {},
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjUxMjczNjIsImV4cCI6MTY2NTczMjE2Mn0.jVXrDwvq215wF1d_TAB5ULEHy1LTSV9LRFoB6pFQTTs"
    }),
    actions: {

        async fetchFactories() {
            const dataFactories = await axios.get('http://apigame.co/factories', {
                headers: {
                    "Authorization": "Bearer " + this.token,
                    'Access-Control-Allow-Origin': '*',
                }
            })

            this.factories = dataFactories;
            console.log(this.factories);
        },
        async buyFactoryLimit() {
            await axios.post('http://apigame.co/users/buy-factory-limit', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async getFactoryLimit() {
            await axios.get('http://apigame.co/users/factory-limit', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async createFactory(modelId) {
            await axios.post('http://apigame.co/factories', { factory_model: modelId }, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async getFactoryById(id) {
            await axios.get('http://apigame.co/factories/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        async deleteFactoryById(id) {
            await axios.delete('http://apigame.co/factories/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async levelUpFactory(id) {
            await axios.post('http://apigame.co/factories/' + id + '/levelup', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },

        // Factories-Models

        async getAllFactoriesModels() {
            await axios.get('http://apigame.co//factories/models', {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },


        async createModelFactory() {
            await axios.post('http://apigame.co/factories/models', {}, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
        async deleteFactoryModelById(id) {
            await axios.delete('http://apigame.co/factories/models/' + id, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
        },
    }

})