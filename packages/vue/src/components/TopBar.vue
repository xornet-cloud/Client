<template>
  <div id="TopBar" class="w-full">
    <div class="p-2 pr-1 flex items-center gap-2 pr-56">
      <base-input v-model="state.machines.filterText.value" placeholder="Filter" class="w-full max-w-48 text-xs" />

      <base-tooltip text="Add machine">
        <base-button transparent @click="showTokenGenerator = true">
          <i-fluency-plus />
        </base-button>
      </base-tooltip>

      <base-tooltip text="Customize Columns">
        <base-dropdown text="Columns" transparent stay-open>
          <template #icon>
            <i-fluency-select-column />
          </template>
          <template #options>
            <base-input v-model="columnFilter" placeholder="Find..." />
            <base-dropdown-checkbox
              v-for="key of Object.keys(columns).filter(item => item.includes(columnFilter.toLowerCase()))"
              :key="key" v-model="(columns as any)[key]"
              :text="key
                .replaceAll('_', ' ')
                .replaceAll('ip', 'IP')
                .replaceAll('cpu', 'CPU')
                .replaceAll('gpu', 'GPU')
                .replaceAll('ram', 'RAM')
              "
            >
              <icon :name="key" />
            </base-dropdown-checkbox>
          </template>
        </base-dropdown>
      </base-tooltip>

      <base-switch v-model="state.settings.showOfflineMachines.value" />
      Show Offline

      <base-switch v-model="state.settings.showOwnedMachinesOnly.value" />
      Owned Only

      <base-dialog v-model="showTokenGenerator" unsized>
        <token-generator />
      </base-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useState } from "../services/state";
import BaseInput from "./base/BaseInput.vue";
import BaseTooltip from "./base/BaseTooltip.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseDialog from "./base/BaseDialog.vue";
import TokenGenerator from "./TokenGenerator.vue";
import BaseDropdown from "./base/BaseDropdown.vue";
import BaseDropdownCheckbox from "./base/BaseDropdownCheckbox.vue";
import Icon from "./shared/Icon.vue";
import BaseSwitch from "./base/BaseSwitch.vue";
const showTokenGenerator = ref(false);
const columnFilter = ref("");
const state = useState();
const columns = computed(() => state.settings.columns);
</script>

<style lang="postcss" scoped>
#TopBar {
  -webkit-app-region: drag;
}
</style>
