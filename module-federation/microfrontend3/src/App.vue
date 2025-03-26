<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(1);
// Custom event listner
window.addEventListener('updated-count', (event: CustomEvent) => {
    count.value = event.detail;
});
</script>

<template>
  <div>
    <h2 class="text-xl font-medium text-black">Micro Frontend 3</h2> 
    <h4 class="text-l font-medium text-gray-500">Using Custom Event</h4> 
    <h3 class="text-l font-medium text-gray-500">Count: {{ count }}</h3>
  </div>
</template>
