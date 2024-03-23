<script setup lang="ts">
import { reactive } from 'vue'
import {
  NCard,
  NPagination,
  NButton,
  NFloatButton,
  NIcon,
  NSpace,
} from 'naive-ui'
import {
  Add,
  TimeOutline,
  TrashOutline,
  PricetagsOutline,
  CreateOutline,
} from '@vicons/ionicons5'
defineOptions({
  name: 'ProgramHistory',
})

const programs = [
  {
    title: '卡片分段示例',
    fileName: '',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
  },
  {
    title: '卡片分段示例',
    fileName: '',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
  },
  {
    title: '卡片分段示例',
    fileName: '',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
  },
  {
    title: '卡片分段示例',
    fileName: '',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
  },
]
const page = reactive<{
  current: number
  size: number
  total: number
}>({
  current: 0,
  size: 0,
  total: 0,
})
</script>

<template>
  <div class="page program mt-4 mx-4">
    <div class="program-list flex flex-wrap flex-row">
      <n-card
        v-for="item in programs"
        :title="item.title"
        hoverable
        bordered
        class="program-item"
      >
        <template #header-extra>
          <n-icon>
            <TimeOutline />
          </n-icon>
          {{ item.createTime }}
        </template>
        卡片内容
        <template #action>
          <n-space :wrap-item="false" justify="space-between" align="center">
            <div class="type">
              <n-icon class="align-middle mr-1">
                <PricetagsOutline />
              </n-icon>
              <span
                class="px-1 bg-amber-300 text-white rounded text-xs align-middle inline-block"
                >{{ item.type }}</span
              >
            </div>
            <div class="operation">
              <n-button ghost color="#8a2be2">
                <template #icon>
                  <n-icon><CreateOutline /></n-icon>
                </template>
              </n-button>
              <n-button ghost color="#ff69b4" class="ml-2">
                <template #icon>
                  <n-icon><TrashOutline /></n-icon>
                </template>
              </n-button>
            </div>
          </n-space>
        </template>
      </n-card>
    </div>
    <n-pagination
      class="mt-4 justify-center"
      :default-page="page.current"
      :default-page-count="page.total"
      :default-page-size="page.size"
    ></n-pagination>
    <n-float-button
      position="fixed"
      :right="30"
      :bottom="40"
      menu-trigger="click"
    >
      <n-icon>
        <Add />
      </n-icon>
    </n-float-button>
  </div>
</template>

<style>
.program-item {
  @apply w-1/4 sm:w-5/6 xl:w-3/12 lg:w-1/4 mx-auto;

  & > .n-card__action {
    @apply px-4 py-2;
  }
}
</style>
