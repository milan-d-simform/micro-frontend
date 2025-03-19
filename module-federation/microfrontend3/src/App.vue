<script lang="ts" setup>
defineProps<{
  count: number;
}>();
</script>

<template>
    <div>
        <h2>Micro Frontend 3</h2>
        <h4>Using Custom Event</h4> 
        <h3>Count: {{ count }}</h3>
    </div>
</template>
