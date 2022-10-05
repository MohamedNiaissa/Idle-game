<template>
    <body>
        <div>Ressources :)</div>

        <button @click="this.insertRessources(res)">Créer</button>
    </body>
    

</template>
<script>
    import { RessourceComp } from '@/components/RessourceComp.vue';
    export default {
       data(){
        return { res: ''}
       },
       setup(){
        const PostsRessources = RessourceComp();
        return { insertRessources: PostsRessources.insertRessources }
       }
    }
</script>
