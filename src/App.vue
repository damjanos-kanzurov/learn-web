<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main class="relative flex flex-1 flex-col overflow-hidden p-4">
    <RouterView />
  </main>
</template>
