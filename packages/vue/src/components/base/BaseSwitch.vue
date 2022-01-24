<template>
  <label style="-webkit-app-region: no-drag" class="relative inline-block w-10 h-5" @click="SoundManager.playClick()" @mouseenter="SoundManager.playHover()">
    <input v-model="value" type="checkbox" class="hidden" :checked="modelValue">
    <span class="slider round" />
  </label>
</template>

<script setup lang="ts">
import { useVModel as useModelValue } from "@vueuse/core";
import { SoundManager } from "/@/services/SoundManager";
const props = defineProps<{modelValue: boolean}>();
const emits = defineEmits(["update:modelValue"]);
const value = useModelValue(props, "modelValue", emits);
</script>

<style scoped lang="postcss">
.slider {
  @apply bg-background-500 rounded-full duration-100 absolute cursor-pointer top-0 left-0 right-0 bottom-0;
  &:hover {
    @apply bg-background-600;
  }
}

.slider:before {
  @apply absolute rounded-full w-3.5 h-3.5 left-0.75 bottom-0.75 bg-tooltip-background transition duration-100;
  content: "";
}

input:checked + .slider {
  @apply bg-primary-500;
  &:hover {
    @apply bg-primary-400;
  }
}

input:checked + .slider:before {
  @apply transform translate-x-18px bg-background-400;
}

</style>
