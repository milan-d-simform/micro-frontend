<script setup>
import { useJokeStore } from '@/store/joke';
const jokeStore = useJokeStore();
</script>
<template>
  <div class="flex flex-row gap-2">
    <button class="bg-blue-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-800 cursor-pointer" @click="jokeStore.getNewJoke">Get New Joke ( Using Pinia )</button>
  </div>
</template>