<script setup lang="ts">
import type { Command } from '@/types/command'

defineProps<{
  item: Command
}>()
</script>
<template>
  <div class="tree-node">
    <span class="expend"></span>
    <div
      class="content"
      :style="{
        backgroundColor: item.color,
      }"
    >
      <span class="icon"></span>
      <span class="name">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.tree-node {
  @apply text-white pr-4;
}

.tree-node > .content {
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
</style>
