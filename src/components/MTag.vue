<script setup lang="ts">
import { defineProps, computed } from 'vue';
import MIcon from './MIcon.vue';

interface IProps {
  ico: string;
  text: string;
  active?: boolean;
}

const props = defineProps<IProps>();
const styleObject = computed(() => ({
  backgroundColor: props.active
    ? 'var(--color-brand)'
    : 'var(--color-black-500)'
}));
</script>

<template>
  <button :style="styleObject">
    <m-icon :path="props.ico" />
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  align-items: center;
  border: none;
  border-radius: 32px;
  color: var(--color-white-900);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  padding: 0.3125rem 0.375rem;

  span {
    margin-left: 0.5rem;
  }
}
</style>
