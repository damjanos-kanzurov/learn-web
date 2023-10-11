<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()
const forgotPasswordForm = reactive({
  email: ''
})

function sendPasswordResetLink() {
  axios
    .post(`/api/forgot-password`, forgotPasswordForm)
    .then((res) => {
      const message = res.data.status
      toast.info(message)
    })
    .catch((err) => {
      console.error(err)
      toast.error('Error occured')
    })
}
</script>

<template>
  <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
    <!-- Login form -->
    <p class="text-2xl font-bold uppercase">Spendlog</p>
    <div class="w-full max-w-sm">
      <form class="mt-8 space-y-4" @submit.prevent="sendPasswordResetLink">
        <div class="w-full">
          <label class="text-sm mb-1 block" for="email">Email address</label>
          <input
            class="form-input w-full"
            type="email"
            name="email"
            id="email"
            v-model="forgotPasswordForm.email"
          />
        </div>
        <div class="w-full">
          <button
            type="submit"
            class="px-4 py-2 w-full inline-flex justify-center bg-gray-950 text-white uppercase"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
