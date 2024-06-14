<script setup lang="ts">
import MIcon from './MIcon.vue';
import iconPath from '../assets/images/icons/code.ico.svg?url';
</script>

<template>
  <footer>
    <p>&copy;2024</p>
    <p>
      <m-icon :path="iconPath" />
      Desenvolvido por
      <span>Matheus G. Pereira</span>
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  align-items: center;
  color: light-dark(var(--color-black-900), var(--color-white-900));
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  justify-content: space-between;
  position: relative;

  &::before {
    background-color: light-dark(
      var(--color-white-600),
      var(--color-white-500)
    );
    content: '';
    height: 2px;
    position: absolute;
    top: -1.5rem;
    width: 100%;
  }
}

span {
  color: var(--color-brand);
  font-weight: 700;
}
</style>
