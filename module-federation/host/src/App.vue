<script setup>
import { storeToRefs } from 'pinia';
import { useCountStore } from '@/store/count'
import { useJokeStore } from 'mf2/store/joke'

import mf1App from 'mf1/App';
import mf1Button from 'mf1/Button';

import mf2App from 'mf2/App';
import mf2Button from 'mf2/Button';
import mf2GetNewJoke from 'mf2/GetNewJoke';

import mf3App from 'mf3/App';
import mf3Button from 'mf3/Button';

const countStore = useCountStore();
const { count } = storeToRefs(countStore);

const jokeStore = useJokeStore();
const { joke } = storeToRefs(jokeStore);

const increment = () => countStore.increment();
const decrement = () => countStore.decrement();

// Custom event listner (MF3)
window.addEventListener('increment', increment);
window.addEventListener('decrement', decrement);
</script>

<template>
<h1>HOST</h1>
<h2>COUNT : {{ count }}</h2>

<div class="d-flex flex-row gap-10 mt-10">
    <!-- Micro frontend 1 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf1App :count="count" />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf1Button @increment="increment" @decrement="decrement" />
        </div>
    </div>
    <!-- Micro frontend 2 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf2App />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf2Button />
        </div>
        <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf2GetNewJoke />
        </div>
    </div>
    <!-- Micro frontend 3 -->
    <div class="d-flex flex-column gap-10 align-center border-1 p-10">
        <div class="d-flex flex-column bg-red p-10">
            <mf3App :count="count" />
        </div>
         <div class="d-flex flex-column gap-10 w-100 justify-content-center">
            <mf3Button />
        </div>
    </div>
</div>
<div v-if="joke" class="p-10 mt-10">
    <h2>Today's Joke</h2>
    <pre>{{ joke }}</pre>
</div>
</template>
