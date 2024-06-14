<script setup lang="ts">
import { provide, ref, type Ref } from 'vue';

import { RouterView } from 'vue-router';

import MFooter from './components/MFooter.vue';
import MToTop from './components/MToTop.vue';

const rootApp: HTMLDivElement = document.querySelector('#app')!;
const defaultColorSchemePreference: Ref<MediaQueryList> = ref(
  window.matchMedia('(prefers-color-scheme: dark)')
);

provide('color-scheme-preference', defaultColorSchemePreference.value);
provide('root-app', rootApp);
</script>

<template>
  <router-view />
  <m-to-top />
  <m-footer />
</template>

<style scoped lang="scss"></style>
