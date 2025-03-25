<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['increment', 'decrement']);
</script>
<template>
  <div class="flex flex-row gap-2">
    <button class="bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-800 cursor-pointer" @click="emit('increment')">+</button>
    <button class="bg-red-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-800 cursor-pointer" @click="emit('decrement')">-</button>
  </div>
</template>