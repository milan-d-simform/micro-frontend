<script setup>
import { storeToRefs } from 'pinia';
import { useJokeStore } from 'mf2/store/joke'

const jokeStore = useJokeStore();
const { joke } = storeToRefs(jokeStore);
</script>

<template>
<div v-if="joke" class="p-6 mt-6">
  <h2 class="text-xl font-medium text-black">Today's Joke</h2>
  <h3 class="text-l font-medium text-gray-500">{{ joke }}</h3>
</div>
</template>
