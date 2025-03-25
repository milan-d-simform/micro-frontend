<script setup>
import { storeToRefs } from 'pinia';
import { useCountStore } from 'host/store/count';

const countStore = useCountStore();
const { count } = storeToRefs(countStore);
</script>

<template>
  <div>
    <h2 class="text-xl font-medium text-black">Micro Frontend 2</h2> 
    <h4 class="text-l font-medium text-gray-500">Using Shared Pinia</h4> 
    <h3 class="text-l font-medium text-gray-500">Count: {{ count }}</h3>
  </div>
</template>
