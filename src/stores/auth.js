import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref(null)

    // const doubleCount = computed(() => count.value * 2)

    function setAuthUser(payload) {
      authUser.value = payload
    }
    function $reset() {
      authUser.value = null
    }

    return { authUser, setAuthUser, $reset }
  },
  { persist: true }
)
