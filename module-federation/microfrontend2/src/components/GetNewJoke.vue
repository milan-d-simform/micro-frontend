<script setup>
import { useJokeStore } from '@/store/joke';
const jokeStore = useJokeStore();
</script>
<template>
    <div class="d-flex flex-row gap-10 w-100">
        <button @click="jokeStore.getNewJoke">Get New Joke ( Using Pinia )</button>
    </div>
</template>