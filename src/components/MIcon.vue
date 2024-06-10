<script setup lang="ts">
import { defineProps, reactive, withDefaults } from 'vue';

interface IComponentProps {
  path: string;
  height?: number;
  width?: number;
}

const props = withDefaults(defineProps<IComponentProps>(), {
  height: 24,
  width: 24
});

const styleObject = reactive({
  background: `url(${props.path})`,
  height: `${props.height}px`,
  width: `${props.width}px`
});
</script>

<template>
  <i :style="styleObject" class="icon"></i>
</template>

<style scoped lang="scss">
.icon {
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
}
</style>
