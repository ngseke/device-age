<script setup lang="ts">
import Item from './components/Item.vue'
import devices from './modules/devices'
</script>

<template>
  <main class="container py-4 text-gray-900">
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
  </main>
</template>
