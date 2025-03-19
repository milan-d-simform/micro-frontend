<script setup>
import { useCountStore } from 'host/store/count';
const countStore = useCountStore();
</script>
<template>
    <div class="d-flex flex-row gap-10 w-100">
        <button @click="countStore.increment">+ From MF1</button>
        <button @click="countStore.decrement">- From MF1</button>
    </div>
</template>