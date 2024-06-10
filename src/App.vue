<script setup lang="ts">
import { RouterView } from 'vue-router';

import MFooter from './components/MFooter.vue';
import MToTop from './components/MToTop.vue';
</script>

<template>
  <router-view />
  <m-to-top />
  <m-footer />
</template>

<style scoped lang="scss"></style>
