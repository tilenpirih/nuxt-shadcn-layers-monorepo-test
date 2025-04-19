<script setup lang="ts">

import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <div class="flex justify-center items-center h-screen">
     <UiButton class="hover:bg-blue-500" @click="console.log('test')">test</UiButton>
     <UiCalendar v-model="value" :weekday-format="'short'" class="rounded-md border" />
  </div>
</template>


<style scoped>

</style>
