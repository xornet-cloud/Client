<template>
  <label v-if="label" :for="label">{{ label }}</label>
  <input v-model="value" style="-webkit-app-region: no-drag" v-bind="$attrs" :name="label" class=" rounded-4px  max-h-200 bg-black text-text bg-opacity-30 focus:bg-opacity-50 border-b-2 border-transparent focus:border-primary transition duration-200 z-1 w-full p-2 block appearance-none focus:outline-none resize-none break-words">
</template>

<script lang="ts" setup>
import { useVModel as useModelValue } from "@vueuse/core";
const props = defineProps<{
	label?: string
	modelValue: string
}>();
const emits = defineEmits(["update:modelValue"]);
const value = useModelValue(props, "modelValue", emits);
</script>
