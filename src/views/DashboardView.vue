<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
  axios.get(`/api/dashboard`).then((res) => console.log('DASHBOARD', res))
})
</script>

<template>
  <div class="container mx-auto px-4">Dashboard</div>
</template>
