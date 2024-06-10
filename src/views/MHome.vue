<script setup lang="ts">
import MHeader from '@/components/MHeader.vue';
import MTag from '@/components/MTag.vue';

import moonIcon from '../assets/images/icons/moon.ico.svg?url';
import sunIcon from '../assets/images/icons/sun.ico.svg?url';
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
          <m-tag :ico="moonIcon" name="dark" text="Escuro" />
          <m-tag :ico="sunIcon" name="light" text="Claro" />
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
  background-color: light-dark(var(--color-white-900), var(--color-black-900));
  color: light-dark(var(--color-black-900), var(--color-white-900));
  margin-inline: -21.875rem;
  padding-inline: 21.875rem;

  .banner {
    align-items: start;
    display: flex;
    justify-content: space-between;
    max-width: 61.4375rem;

    h1 {
      color: light-dark(var(--color-black-900), var(--color-white-900));
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
