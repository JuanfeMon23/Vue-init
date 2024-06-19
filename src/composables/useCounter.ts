import { ref, computed } from 'vue';

export function useCounter(initialValue: number) {
  const counter = ref(initialValue);

  return {
    counter,

    squareCounter: computed(() => counter.value * counter.value),
  };
}
