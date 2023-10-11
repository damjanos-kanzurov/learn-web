<script setup>
import { onMounted, computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const tabs = computed(() => {
  const currentRoute = router.currentRoute.value.name
  return router.options.routes?.find(
    (route) =>
      route.name === currentRoute || route.children?.find((child) => child.name === currentRoute)
  )?.children
})
</script>

<template>
  <div class="container mx-auto px-4">
    <!-- Tabs -->
    <div class="px-8 py-2 mb-4">
      <nav class="flex items-center space-x-8">
        <RouterLink v-for="tab in tabs" :to="{ name: tab.name }">{{ tab.meta.name }}</RouterLink>
      </nav>
    </div>
    <!-- Tabs content -->
    <div class="bg-white border border-black">
      <div class="p-4">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>
