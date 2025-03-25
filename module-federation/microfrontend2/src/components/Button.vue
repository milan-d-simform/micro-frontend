<script setup>
import { useCountStore } from 'host/store/count';
const countStore = useCountStore();
</script>
<template>
  <div class="flex flex-row gap-2">
    <button class="bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-800 cursor-pointer" @click="countStore.increment">+</button>
    <button class="bg-red-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-800 cursor-pointer" @click="countStore.decrement">-</button>
  </div>
</template>