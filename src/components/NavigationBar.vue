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
        <ul>
          <li class="text-base">
            <RouterLink to="/"> Dashboard </RouterLink>
          </li>
        </ul>
        <!-- Profile/Sign in -->
        <div class="ml-auto">
          <p class="text-base">
            <RouterLink to="/login"> Sign in </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
