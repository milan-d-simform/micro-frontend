<script lang="ts" setup>
const increment = () => {
  const event = new CustomEvent('increment');
  window.dispatchEvent(event);
};
const decrement = () => {
  const event = new CustomEvent('decrement');
  window.dispatchEvent(event);
};
</script>
<template>
  <div class="flex flex-row gap-2">
    <button class="bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-800 cursor-pointer" @click="increment">+</button>
    <button class="bg-red-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-800 cursor-pointer" @click="decrement">-</button>
  </div>
</template>