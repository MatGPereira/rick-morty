<script setup lang="ts">
import { ref } from 'vue';

import toUp from '../assets/images/icons/to-up.ico.svg?url';
import MIcon from './MIcon.vue';

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleActiveState(state: boolean) {
  isActive.value = state;
}

const isActive = ref(false);
</script>

<template>
  <section>
    <img src="../assets/images/logo-1.png" />
    <p>
      <Transition name="fade">
        <span v-if="isActive">Voltar ao topo</span>
      </Transition>
      <m-icon
        :path="toUp"
        :height="40"
        :width="40"
        @mouseover="toggleActiveState(true)"
        @mouseleave="toggleActiveState(false)"
        @click="scrollToTop"
      />
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  p {
    cursor: pointer;

    span {
      color: var(--color-white-400);
      font-size: 1rem;
      margin-right: 0.5rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
