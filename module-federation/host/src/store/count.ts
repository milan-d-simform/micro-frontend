import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCountStore = defineStore('countStore', () => {
  // -- STATES -->
  const countRef = ref(1);

  // -- ACTIONS -->
  const increment = () => countRef.value++;
  const decrement = () => countRef.value--;

  // GETTERS --->
  const count = computed(() => countRef.value);

  return { count, increment, decrement };
});
