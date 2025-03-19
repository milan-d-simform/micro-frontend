import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useJokeStore = defineStore('jokeStore', () => {
  // -- STATES -->
  const jokeRef = ref('');

  // -- ACTIONS -->
  const getNewJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random?category=sport')
      .then((response) => response.json())
      .then((data) => {
        jokeRef.value = data.value;
      });
  };

  // GETTERS --->
  const joke = computed(() => jokeRef.value);

  return { joke, getNewJoke };
});
