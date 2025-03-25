<script setup>
import { storeToRefs } from 'pinia';
import { useJokeStore } from 'mf2/store/joke'

const jokeStore = useJokeStore();
const { joke } = storeToRefs(jokeStore);
</script>

<template>
<div v-if="joke" class="p-10 mt-10">
  <h2>Today's Joke</h2>
  <pre>{{ joke }}</pre>
</div>
</template>
