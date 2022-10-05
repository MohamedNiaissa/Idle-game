import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1yTGVnZW5kIiwic3ViIjoxLCJyb2xlIjowLCJpYXQiOjE2NjQ5NjkzNzYsImV4cCI6MTY2NTU3NDE3Nn0.d1A3eWk92Tnj7tQhtdN0gvewrZNN2NmgEPttHQHaOlM"

export const useStorageStore = defineStore('storage', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
