<template>
  <button :class="!transparent && 'bg-primary-500 active:bg-primary-400 '" style="-webkit-app-region: no-drag" class="active:shadow-xl  ring-white filter disabled:saturate-20 disabled:cursor-not-allowed hover cursor-pointer flex items-center gap-2 transition duration-200  rounded-2px px-4 py-2 focus-within:ring-2 " @click="SoundManager.playClick()" @mouseenter="SoundManager.playHover()">
    <slot />
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { SoundManager } from "/@/services/SoundManager";

defineProps<{
	transparent?: boolean
	text?: string
}>();
</script>
