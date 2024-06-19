import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const SquareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      SquareCounter: SquareCounter,
    };
  },
});
