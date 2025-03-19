<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCountStore } from '@/store/count'
import joke from "@/components/Joke.vue";

import mf1App from 'mf1/App';
import mf1Button from 'mf1/Button';

import mf2App from 'mf2/App';
import mf2Button from 'mf2/Button';
import mf2GetNewJoke from 'mf2/GetNewJoke';

import mf3App from 'mf3/App';
import mf3Button from 'mf3/Button';

const countStore = useCountStore();
const { count } = storeToRefs(countStore);

const increment = () => countStore.increment();
const decrement = () => countStore.decrement();

// Custom event listner (MF3)
window.addEventListener('increment', increment);
window.addEventListener('decrement', decrement);

watch(
    () => count.value,
    () => {
        window.dispatchEvent(new CustomEvent('updated-count', { detail: count.value }));
    }
);
</script>

<template>
<h1>HOST</h1>
<h2>COUNT : {{ count }}</h2>

<div class="d-flex flex-row gap-10 mt-10">
    <!-- Micro frontend 1 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf1-app :count="count" />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf1-button @increment="increment" @decrement="decrement" />
        </div>
    </div>
    <!-- Micro frontend 2 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf2-app />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf2-button />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf2-get-new-joke />
        </div>
    </div>
    <!-- Micro frontend 3 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf3-app :count="count" />
        </div>
         <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf3-button />
        </div>
    </div>
</div>
<joke />
</template>
