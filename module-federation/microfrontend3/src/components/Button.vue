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
    <div class="d-flex flex-row gap-10 w-100">
        <button @click="increment">+ From MF3</button>
        <button @click="decrement">- From MF3</button>
    </div>
</template>