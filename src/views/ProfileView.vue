<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
  axios.get(`/api/dashboard`).then((res) => console.log('PROFILE', res))
})
</script>

<template>
  <div class="container mx-auto px-4">Profile</div>
</template>
