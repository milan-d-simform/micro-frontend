<script lang="ts" setup>
defineProps<{
  count: number;
}>();
</script>

<template>
  <div>
    <h2 class="text-xl font-medium text-black">Micro Frontend 1</h2> 
    <h4 class="text-l font-medium text-gray-500">Using Props & Event Emit</h4> 
    <h3 class="text-l font-medium text-gray-500">Count: {{ count }}</h3>
  </div>
</template>
<style lang="css">
/* @import './assets/main.css'; */
</style>