<script setup lang="ts">
import MTag from './MTag.vue';
import heartIcon from '../assets/images/icons/heart.ico.svg?url';
</script>

<template>
  <header>
    <img src="../assets/images/logo-1.png" />
    <m-tag :ico="heartIcon" text="Lista de favoritos" />
  </header>
</template>

<style scoped lang="scss">
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
