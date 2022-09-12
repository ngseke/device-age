<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import Device from '../types/Device'
import Card from './Card.vue'

const props = defineProps<{
  device: Device,
}>()

function calc (date: string) {
  const a = dayjs()
  let b = dayjs(date)

  const year = a.diff(b, 'year')
  b = b.add(year, 'year')

  const month = a.diff(b, 'months')
  b = b.add(month, 'months')

  const day = a.diff(b, 'day')

  return { year, month, day }
}

function getDays (date: string) {
  return dayjs().diff(date, 'days')
}

function getAge (date: string) {
  const { year, month, day } = calc(date)
  return { year, month, day }
}

const birthday = computed(() => props.device.birthday)
const days = computed(() => getDays(birthday.value))
const age = computed(() => getAge(birthday.value))
</script>

<template>
  <Card>
    <div>
      <h2 class="text-lg font-semibold">
        {{ device.name }}
      </h2>
      <div class="mb-1 text-xs opacity-70">
        {{ birthday }}
      </div>
      <div class="space-x-3">
        <span class="text-3xl font-bold">
          {{ days }}
        </span>
        <span class="font-medium">
          <span class="text-xl">{{ age.year }}</span>Y
          <span class="text-xl">{{ age.month }}</span>M
          <span class="text-xl">{{ age.day }}</span>D
        </span>
      </div>
    </div>
  </Card>
</template>
