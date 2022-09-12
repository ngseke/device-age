<script setup lang="ts">
import Item from './components/Item.vue'
import devices from './modules/devices'
import ButtonDarkMode from './components/ButtonDarkMode.vue'
</script>

<template>
  <main class="container flex min-h-screen flex-col justify-center text-gray-900 dark:text-white">
    <div class="p-3">
      <header class="flex items-center justify-between">
        <h1 class="mb-5 text-4xl font-bold sm:text-5xl ">
          Device Age
        </h1>
        <ButtonDarkMode />
      </header>

      <transition-group
        tag="div"
        class="flex flex-wrap gap-4 transition-all"
      >
        <div
          v-for="(device) in devices"
          :key="device.key"
          class="flex-none"
        >
          <Item :device="device" />
        </div>
      </transition-group>
    </div>
  </main>
</template>
