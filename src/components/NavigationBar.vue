<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'

const authStore = useAuthStore()
const router = useRouter()
const hasAuthUser = computed(() => {
  return Boolean(authStore.authUser)
})

function logout() {
  axios
    .post('/api/logout')
    .then(() => authStore.$reset())
    .then(() => router.push({ name: 'dashboard', force: true }))
    .catch((err) => console.error(err))
}
</script>

<template>
  <nav class="border-y border-gray-950">
    <div class="container mx-auto p-4">
      <div class="flex items-center">
        <!-- Nav logo -->
        <div class="mr-12">
          <p class="text-lg font-bold uppercase">
            <RouterLink to="/"> Spendlog </RouterLink>
          </p>
        </div>
        <!-- Nav links -->
        <ul class="flex space-x-6">
          <li class="text-base">
            <RouterLink to="/"> Dashboard </RouterLink>
          </li>
          <li class="text-base">
            <RouterLink to="/profile"> Profile </RouterLink>
          </li>
        </ul>
        <!-- Profile/Sign in -->
        <div class="ml-auto">
          <p class="text-base">
            <RouterLink to="/login" v-if="!hasAuthUser"> Sign in </RouterLink>
            <button @click="logout" v-else>Log out</button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
