<template>
    <body>
      <UsinesComp/>
      <UsinesCreateComp/>
    </body>
</template>

<script>
import UsinesComp from '../components/UsinesComp.vue'
import UsinesCreateComp from '../components/UsinesCreateComp.vue'
export default {
  components: {
      UsinesComp,
      UsinesCreateComp
  }
}
</script>