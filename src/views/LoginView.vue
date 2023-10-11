<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'

const authStore = useAuthStore()
const router = useRouter()
const loginForm = reactive({
  email: '',
  password: ''
})

function login() {
  axios
    .get(`/sanctum/csrf-cookie`)
    .then(() => {
      axios.post(`/api/login`, loginForm).then((res) => {
        authStore.setAuthUser(res.data.user)
        router.push({ name: 'dashboard' })
      })
    })
    .catch((err) => {
      console.error(err)
      toast.error('Unable to login user, please try again')
    })
}
</script>

<template>
  <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
    <!-- Login form -->
    <p class="text-2xl font-bold uppercase">Spendlog</p>
    <div class="w-full max-w-sm">
      <form class="mt-8 space-y-4" @submit.prevent="login">
        <div class="w-full">
          <label class="text-sm mb-1 block" for="email">Email address</label>
          <input
            class="form-input w-full"
            type="email"
            name="email"
            id="email"
            v-model="loginForm.email"
          />
        </div>
        <div class="w-full">
          <label class="text-sm mb-1 block" for="password">Password</label>
          <input
            class="form-input w-full"
            type="password"
            name="password"
            id="password"
            v-model="loginForm.password"
          />
        </div>
        <div class="w-full text-right">
          <RouterLink to="/forgot-password"> Forgot password? </RouterLink>
        </div>
        <div class="w-full">
          <button
            type="submit"
            class="px-4 py-2 w-full inline-flex justify-center bg-gray-950 text-white uppercase"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- Don't have an account -->
  <div class="relative shrink-0">
    <div class="space-x-4 flex items-center justify-center">
      <p>Don't have an account?</p>
      <RouterLink
        to="/register"
        class="px-4 py-2 block justify-center bg-white border border-gray-950 uppercase"
      >
        Sign up
      </RouterLink>
    </div>
  </div>
</template>
