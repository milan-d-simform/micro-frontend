<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCountStore } from '@/store/count';
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
<h1 class="text-xl font-medium text-black mt-3 text-center">HOST</h1>
<h2 class="text-l font-medium text-gray-500 mt-3 mb-3 text-center">
  COUNT : {{ count }}
</h2>

<div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  <!-- Micro frontend 1 -->
  <div class="flex flex-1 flex-col bg-blue-200 p-4 text-center rounded-lg gap-3">
    <div class="flex flex-col">
      <mf1-app :count="count" />
    </div>
    <div class="flex gap-3 flex-col items-center">
      <mf1-button @increment="increment" @decrement="decrement" />
    </div>
  </div>
  <!-- Micro frontend 2 -->
  <div class="flex flex-1 flex-col bg-green-200 p-4 text-center rounded-lg gap-3">
    <div class="flex flex-col">
      <mf2-app />
    </div>
    <div class="flex gap-3 flex-col items-center">
       <div class="flex gap-2 justify-content-center">
        <mf2-button />
      </div>
      <div class="flex gap-2 justify-content-center">
        <mf2-get-new-joke />
      </div>
    </div>
  </div>
  <!-- Micro frontend 3 -->
  <div class="flex flex-1 flex-col bg-red-200 p-4 text-center rounded-lg gap-3">
    <div class="flex flex-col">
      <mf3-app :count="count" />
    </div>
    <div class="flex gap-3 flex-col items-center">
      <mf3-button />
    </div>
  </div>
</div>
<joke />
</template>
