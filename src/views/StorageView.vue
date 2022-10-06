<template>
  <div>{{ res }}</div>
</template>


<script setup>
  import { computed }from 'vue'
  import { storeToRefs } from 'pinia'
  import { useResources } from "../stores/ressources";

  
  const { resources }  = storeToRefs(useResources())
  const { getAllRessources } = useResources()
  
  getAllRessources()
  const res = computed(() => {
      return resources
  })
</script>
