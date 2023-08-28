<script setup></script>

<template>
  <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
    <!-- Login form -->
    <p class="text-2xl font-bold uppercase">Spendlog</p>
    <form class="w-full max-w-sm">
      <div class="mt-8 space-y-4">
        <div class="w-full">
          <label class="text-sm mb-1 block" for="first_name">First name</label>
          <input class="form-input w-full" type="text" name="first_name" id="first_name" />
        </div>
        <div class="w-full">
          <label class="text-sm mb-1 block" for="last_name">Last name</label>
          <input class="form-input w-full" type="text" name="last_name" id="last_name" />
        </div>
        <div class="w-full">
          <label class="text-sm mb-1 block" for="email">Email address</label>
          <input class="form-input w-full" type="email" name="email" id="email" />
        </div>
        <div class="w-full">
          <label class="text-sm mb-1 block" for="password">Password</label>
          <input class="form-input w-full" type="password" name="password" id="password" />
        </div>
        <div class="flex items-center space-x-4 w-full">
          <input class="form-checkbox" type="checkbox" name="terms" id="terms" />
          <label class="text-sm mb-1 block" for="terms">
            I have read and understood the Privacy Policy and I agree to the Terms of use
          </label>
        </div>
        <div class="w-full">
          <button
            class="px-4 py-2 w-full inline-flex justify-center bg-gray-950 text-white uppercase"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
