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
const authUserFullName = computed(() => {
  return hasAuthUser.value
    ? authStore.authUser.first_name + ' ' + authStore.authUser.last_name
    : null
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
            <RouterLink :to="{ name: 'dashboard' }"> Spendlog </RouterLink>
          </p>
        </div>
        <!-- Nav links -->
        <ul class="flex space-x-6">
          <li class="text-base">
            <RouterLink :to="{ name: 'dashboard' }"> Dashboard </RouterLink>
          </li>
          <li class="text-base">
            <RouterLink :to="{ name: 'expense' }"> Logger </RouterLink>
          </li>
        </ul>
        <!-- Profile/Sign in -->
        <div class="flex ml-auto">
          <p class="text-base mr-12" v-if="hasAuthUser">
            <RouterLink to="/profile"> {{ authUserFullName }} </RouterLink>
          </p>
          <p class="text-base">
            <RouterLink to="/login" v-if="!hasAuthUser"> Sign in </RouterLink>
            <button @click="logout" v-else>Log out</button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
