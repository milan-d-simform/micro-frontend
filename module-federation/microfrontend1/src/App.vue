<script lang="ts" setup>
defineProps<{
  count: number;
}>();
</script>

<template>
    <div>
        <h2>Micro Frontend 1</h2> 
        <h4>Using Props & Event Emit</h4> 
        <h3>Count: {{ count }}</h3>
    </div>
</template>
