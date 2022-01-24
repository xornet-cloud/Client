<template>
  <teleport to="body">
    <div id="control-buttons" class="absolute flex" :class="state.window.isMaximized && 'is-maximized'">
      <button @click="onMinimizeClick()">
        <i-fluency-minimize />
      </button>
      <button v-if="!state.window.isMaximized" @click="onMaximizeClick()">
        <i-fluency-maximize />
      </button>
      <button v-else @click="onUnmaximizeClick()">
        <i-fluency-unmaximize />
      </button>
      <button class="caution" @click="onCloseClick()">
        <i-fluency-close />
      </button>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { nodeEmit } from "/@/services/logic";
import { SoundManager } from "/@/services/SoundManager";
import { useState } from "/@/services/state";

const state = useState();

const onCloseClick = () => {
	nodeEmit("close");
};
const onMinimizeClick = () => {
	nodeEmit("minimize");
};
const onMaximizeClick = () => {
	state.window.isMaximized = true;
	nodeEmit("maximize");
};
const onUnmaximizeClick = () => {
	state.window.isMaximized = false;
	nodeEmit("unmaximize");
};
</script>

<style lang="postcss" scoped>
#control-buttons {
  -webkit-app-region: no-drag;
  @apply top-8px right-8px;
  &.is-maximized {
    @apply top-0px right-0px;

    & button {
      @apply rounded-0px;
    }
  }
  button {
    @apply rounded-4px;

    -webkit-app-region: no-drag;

    transition: all 0.25s;

    & .icon {
      @apply w-4 h-4;
    }

    @apply p-6px px-16px text-text text-opacity-50 flex items-center justify-center;

    &:hover {
      @apply bg-background-400 text-opacity-75;
    }

    &.caution {
      &:hover {
        @apply bg-caution text-text text-opacity-100;
      }
    }
  }
}
</style>
