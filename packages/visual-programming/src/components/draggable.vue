<script lang="ts" setup>
import draggable from 'vuedraggable'
// import { RecycleScroller } from 'vue-virtual-scroller'
// import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import type { Command } from 'types/command'

defineOptions({
  name: 'DraggableTree',
  inheritAttrs: false,
})
defineProps<{
  list: Command[]
  level?: number
}>()
</script>

<template>
  <!-- <RecycleScroller
    class="scroller"
    :items="list"
    :item-size="54"
    key-field="id"
    v-slot="{ item }"
  > -->
  <draggable
    class="list"
    :group="{ name: 'command', put: true }"
    :list="list"
    item-key="id"
    v-bind="$attrs"
    tag="ul"
  >
    <template #item="{ element }">
      <li :class="['list-item', element.isBlock && 'is-block']">
        <p class="name" :style="{ backgroundColor: element.color }">
          {{ element.name }}
        </p>
        <template v-if="element.isBlock">
          <div
            class="col-line"
            :style="{ backgroundColor: element.color }"
          ></div>
          <div
            class="row-line"
            :style="{ backgroundColor: element.color }"
          ></div>
        </template>
        <DraggableTree
          v-if="element.children"
          class="nested"
          :list="element.children"
          :level="level! + 1"
          v-bind="$attrs"
        ></DraggableTree>
      </li>
    </template>
  </draggable>
  <!-- </RecycleScroller> -->
</template>

<style>
.scroller {
  @apply h-full;
}
.list {
  @apply text-white;
}
.view-area {
  @apply pb-8;
}
.nested {
  @apply pb-0;
  min-height: 2rem;
  padding-left: 0.6rem;
}
.list-item {
  @apply relative w-9/12 cursor-grab;
}
.list-item.is-block {
  @apply pb-2;
}
.commands > .is-block {
  min-height: 3rem;
}
.view-area > .is-block {
  @apply pb-2;
  min-height: 3rem;
}
.name {
  @apply h-8 leading-8 pl-6;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.is-block > .name {
  border-bottom-left-radius: 0;
}
.nested > .list-item {
  @apply w-full;
  margin-bottom: 2px;
  margin-top: 2px;
}
.col-line {
  @apply absolute top-8 left-0 bottom-0 w-2;
  border-bottom-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}
.row-line {
  @apply absolute left-2 bottom-0 w-16 h-2;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}
</style>
