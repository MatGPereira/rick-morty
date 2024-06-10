<script setup lang="ts">
import { ref, type Ref } from 'vue';

import MHeader from '@/components/MHeader.vue';
import MTag from '@/components/MTag.vue';

import moonIcon from '../assets/images/icons/moon.ico.svg?url';
import sunIcon from '../assets/images/icons/sun.ico.svg?url';

interface IsActive {
  light: boolean;
  dark: boolean;
}

const isActive: Ref<IsActive> = ref({
  light: false,
  dark: true
});

function changeState(event: MouseEvent) {
  const target = event.currentTarget as HTMLButtonElement;
  const name = target.getAttribute('name');

  if (name) {
    if (name === 'light' || name === 'dark') {
      isActive.value[name] = !isActive.value[name];
    }
  }
}
</script>

<template>
  <section>
    <m-header />
    <div class="banner">
      <div>
        <h1>
          Saiba tudo em um só
          <span>lugar.</span>
        </h1>
        <p>Personagens. localizações, episódios e muito mais.</p>
        <div class="toggle-theme">
          <m-tag
            :ico="moonIcon"
            :active="isActive.dark"
            name="dark"
            text="Escuro"
            @click.stop="changeState($event)"
          />
          <m-tag
            :ico="sunIcon"
            :active="isActive.light"
            name="light"
            text="Claro"
            @click.stop="changeState($event)"
          />
        </div>
        <strong>Ai sim, Porr#@%&*</strong>
      </div>
      <figure>
        <img src="../assets/images/rick-dark.png" />
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-black-900);
  color: var(--color-white-900);
  margin-inline: -21.875rem;
  padding-inline: 21.875rem;

  .banner {
    align-items: start;
    display: flex;
    justify-content: space-between;
    max-width: 61.4375rem;

    h1 {
      color: var(--color-white-900);
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      max-width: 24.625rem;
      margin-block: 4rem 1.5625rem;

      span {
        color: var(--color-brand-soft);
      }
    }

    p {
      font-size: 16px;
    }

    .toggle-theme {
      align-items: center;
      column-gap: 1rem;
      display: flex;
      margin-block: 4.0625rem 1.5rem;
    }

    strong {
      color: var(--color-brand-soft);
      font-size: 1rem;
    }

    figure {
      justify-self: flex-start;
    }
  }
}
</style>
