<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import IconSun from './IconSun.vue'
import IconMoon from './IconMoon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="text-2xl"
    @click="toggleDark()"
  >
    <IconSun v-if="isDark" />
    <IconMoon v-else />
  </button>
</template>
