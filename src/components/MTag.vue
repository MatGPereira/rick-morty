<script setup lang="ts">
import { defineProps } from 'vue';
import MIcon from './MIcon.vue';

interface IProps {
  ico: string;
  text: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <button>
    <m-icon :path="props.ico" />
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  align-items: center;
  background-color: var(--color-brand);
  border: none;
  border-radius: 32px;
  color: var(--color-white-900);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  padding: 0.4375rem 0.375rem;

  span {
    margin-left: 0.5rem;
  }
}
</style>
