<script setup lang="ts">
import type { Command } from '@/types/command'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import TreeNode from './treeNode.vue'

defineProps<{
  data: Command[]
  keyValue: string
  itemSize: number
}>()
</script>
<template>
  <RecycleScroller
    :items="data"
    :item-size="itemSize"
    :key-field="keyValue"
    v-slot="{ item }"
  >
    <TreeNode :item="item" :key="item.id"/>
  </RecycleScroller>
</template>

<style scoped></style>
