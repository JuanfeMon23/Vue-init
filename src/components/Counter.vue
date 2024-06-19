<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ SquareCounter }}</h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value: number;
}

const props = defineProps<Props>();
const counter = ref(props.value);

const SquareCounter = computed(() => counter.value * counter.value);
</script>
