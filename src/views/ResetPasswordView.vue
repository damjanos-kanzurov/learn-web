<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const resetPasswordForm = reactive({
  token: route.query.token,
  email: route.query.email,
  password: '',
  password_confirmation: ''
})

function resetPassword() {
  axios
    .put('/api/reset-password', resetPasswordForm)
    .then((res) => {
      toast.success(res.data.status)
      router.push({ name: 'login' })
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
}
</script>

<template>
  <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
    <!-- Login form -->
    <p class="text-2xl font-bold uppercase">Spendlog</p>
    <div class="w-full max-w-sm">
      <form class="mt-8 space-y-4" @submit.prevent="resetPassword">
        <div class="w-full">
          <label class="text-sm mb-1 block" for="password">Password</label>
          <input
            class="form-input w-full"
            type="password"
            name="password"
            id="password"
            v-model="resetPasswordForm.password"
          />
        </div>
        <div class="w-full">
          <label class="text-sm mb-1 block" for="password_confirmation">Confirm password</label>
          <input
            class="form-input w-full"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            v-model="resetPasswordForm.password_confirmation"
          />
        </div>
        <div class="w-full">
          <button
            type="submit"
            class="px-4 py-2 w-full inline-flex justify-center bg-gray-950 text-white uppercase"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
