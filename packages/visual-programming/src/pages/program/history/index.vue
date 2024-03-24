<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
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
import type { Program } from 'types/program'
defineOptions({
  name: 'ProgramHistory',
})

const router = useRouter()

const programs: Program[] = [
  {
    id: 'dakajl1',
    fileName: '卡片分段示例',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
    description: '',
  },
  {
    id: 'nn891jka',
    fileName: '卡片分段示例',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
    description: '',
  },
  {
    id: 'lfahfak',
    fileName: '卡片分段示例',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
    description: '',
  },
  {
    id: 'daadf1l1',
    fileName: '卡片分段示例',
    type: 'JS',
    createTime: '2024-03-21 16:30:24',
    description: '',
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

const jumpToEditor = (id: string) => {
  router.push({ name: 'editor', params: { id } })
}
</script>

<template>
  <div class="page program mt-4 mx-4">
    <div class="program-list flex flex-wrap flex-row">
      <n-card
        v-for="item in programs"
        :title="item.fileName"
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
              <n-button ghost color="#8a2be2" @click="jumpToEditor(item.id)">
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

<style lang="css">
.program-item {
  @apply w-1/4 sm:w-5/6 xl:w-3/12 lg:w-1/4 mx-auto;

  & > .n-card__action {
    @apply px-4 py-2;
  }
}
</style>
