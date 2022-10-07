import { defineStore } from 'pinia'
export const RessourceComp = defineStore({
    id: 'PostsRessources',
    state: ()=>(
        ressources: 
        {
        id: 0,
        name: 'Bois',
        image_url: '',
        base_value: 0,
        factory_models: ''
    }),
    getters: {
        ressources: state =>state.ressources.length,
    },
    actions:{

        async insertRessources(res)

        try{
            await doAjaxRequest(res)
            this.ressources.push(res)
            this.id++
        }

        catch(e){
            this.errors.push(e)
        }
    }

    id*	number
    // name*	string
    // image_url*	string
    // base_value*	number
    // factory_models*
