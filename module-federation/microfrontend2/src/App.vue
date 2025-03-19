<script setup>
import { storeToRefs } from 'pinia';
import { useCountStore } from 'host/store/count';

const countStore = useCountStore();
const { count } = storeToRefs(countStore);
</script>

<template>
    <div>
        <h2>Micro Frontend 2</h2>
        <h4>Using Shared Pinia</h4> 
        <h3>Count: {{ count }}</h3>
    </div>
</template>
