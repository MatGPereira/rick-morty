<script setup lang="ts">
import { defineProps } from 'vue';

import MIcon from './MIcon.vue';

interface IProps {
  ico: string;
  text: string;
}

function onClick(event: MouseEvent) {
  const target: HTMLButtonElement = event.currentTarget! as HTMLButtonElement;
  target.classList.toggle('clicked');
}

const props = defineProps<IProps>();
</script>

<template>
  <button type="button" @click="onClick">
    <m-icon :path="props.ico" />
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  align-items: center;
  border: none;
  border-radius: 32px;
  color: light-dark(var(--color-black-900), var(--color-white-900));
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  padding: 0.3125rem 0.375rem;

  &.clicked {
    background-color: var(--color-brand);
  }

  span {
    margin-left: 0.5rem;
  }
}
</style>
