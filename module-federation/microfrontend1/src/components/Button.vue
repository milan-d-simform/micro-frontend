<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['increment', 'decrement']);
</script>
<template>
    <div class="d-flex flex-row gap-10 w-100">
        <button @click="emit('increment')">+ From MF1</button>
        <button @click="emit('decrement')">- From MF1</button>
    </div>
</template>