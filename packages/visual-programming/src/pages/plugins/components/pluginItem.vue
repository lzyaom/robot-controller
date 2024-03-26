<script setup lang="ts">
import type { Plugin } from 'types/plugin'
withDefaults(defineProps<Plugin>(), {
  status: false,
})
</script>

<template>
  <div class="plugin-wrapper flex items-center mb-2 last:mb-0">
    <div class="plugin-icon w-12 h-12 rounded bg-lime-200"></div>
    <div class="plugin-info flex-1 ml-2 text-xs">
      <span class="plugin-name font-semibold text-slate-600">{{ name }}</span>
      <p class="describe">{{ describe }}</p>
      <div class="flex justify-between items-center">
        <span class="author">{{ author }}</span>
        <span class="status">{{ status ? '已安装' : '未安装' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
