<script setup lang="ts">
import Item from './components/Item.vue'
import devices from './modules/devices'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main class="container flex min-h-screen max-w-6xl flex-col justify-center text-gray-900 dark:text-white">
    <div class="px-3 py-6">
      <Header />

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

      <Footer />
    </div>
  </main>
</template>
