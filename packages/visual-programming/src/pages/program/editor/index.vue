<script setup lang="ts">
// import { reactive, computed } from 'vue'
import type { /* CSSProperties, */ Component } from 'vue'
// import { throttle } from 'lodash'
import Layout from '@/layout/index.vue'
import Draggable from './components/draggable.vue'
import type { Command } from 'types/command'
import treeData from './data'
import VTree from './components/vTree/index.vue'
import ToolBar from './components/ToolBar/index.vue'

defineOptions({
  name: 'Program',
})
// const HEIGHT = 32
// const COUNT = 20
// const GAP = 10
// const page = reactive<{
//   loading: boolean
//   curIndex: number
//   offsetY: number
// }>({
//   loading: false,
//   curIndex: 0,
//   offsetY: 0,
// })

// const treeStyles = computed<CSSProperties>(() => ({
//   height: treeData.length * HEIGHT + 'px',
//   // transform: `translate3d(0px, ${page.offsetY}px, 0px)`,
// }))

// const trees = computed<Array<Command>>(() => {
//   // const total = treeData.length - 1
//   // let end = page.curIndex + COUNT
//   // if (end > total) {
//   //   end = total
//   // }
//   return treeData.slice(page.curIndex, page.curIndex + COUNT)
// })

const commands: Array<Command> = [
  { name: 'Move', id: '1', color: '#490', isBlock: true },
  { name: 'WayPoint', id: '2', color: '#63e9b4', isBlock: false },
  { name: 'MovePath', id: '3', color: '#488', isBlock: false },
  { name: 'If', id: '4', color: '#890', isBlock: true },
  { name: 'Else', id: '5', color: '#38e', isBlock: true },
  { name: 'Loop', id: '6', color: '#f90', isBlock: true },
  { name: 'Call', id: '7', color: '#09a', isBlock: false },
  { name: 'setValue', id: '8', color: '#c9a9b9', isBlock: false },
  { name: 'Break', id: '9', color: '#a34', isBlock: false },
  { name: 'Continue', id: '10', color: '#a5e', isBlock: false },
  { name: 'Script', id: '11', color: '#e19', isBlock: false },
  { name: 'Set I/O', id: '12', color: '#ea9', isBlock: false },
  { name: 'MoveZ', id: '13', color: '#bac', isBlock: true },
]
// const clone = (e: Command) => {
//   console.log('clone::', e)
//   const target = Object.assign({}, e)
//   target.id = Date.now().toString(16)
//   if (target.isBlock) {
//     target.children = []
//   }
//   return target
// }
// const change = (e: any) => {
//   console.log('change:::', e)
// }

// const add = (e: any) => {
//   console.log('add::', e)
// }
// const end = (e: any) => {
//   console.log('end::', e)
// }

let currentComponent: Component | null = null

// const handleScroll = (e: UIEvent) => {
//   e.preventDefault()
//   if (page.loading) {
//     page.loading = false
//     return
//   }
//   page.loading = true
//   const { scrollTop, scrollHeight } = e.target! as HTMLDivElement
//   const scrollIndex = Math.floor(scrollTop / HEIGHT)
//   console.log(scrollIndex, scrollTop, scrollHeight)
//   page.curIndex = scrollIndex // Math.max(0, Math.min(treeData.length - 1, scrollIndex))
//   console.log('curIndex:::', page.curIndex)
//   // page.offsetY = scrollTop - (scrollTop % HEIGHT)
// }
</script>

<template>
  <div class="program-editor">程序编辑</div>
  <!-- <Layout>
    <template #sider>
      <Draggable
        class="commands"
        :list="commands"
        :group="{ name: 'command', pull: 'clone', put: false }"
        :sort="false"
      >
      </Draggable>
    </template>
    <div class="w-2/3 h-full bg-slate-50 pl-4">
      <h3 class="file-name text-center">文件名：aa.json</h3>
      <div class="tree-container">
        <VTree :data="treeData" :item-size="32" keyValue="id"> </VTree>
      </div>
      <ToolBar />
    </div>
    <div class="editer-container w-1/3 h-full p-4">
      <div class="w-2/5">属性编辑区</div>
      <component :is="currentComponent"></component>
    </div>
  </Layout> -->
</template>

<style>
.commands > .list-item {
  margin-bottom: 10px;
}

.file-name {
  @apply h-10 leading-10;
}

.tree-container {
  @apply overflow-y-auto will-change-transform pb-4 mb-2;
  height: calc(100% - 5.5rem);
}

/* .view-area > .list-item {
  margin-bottom: 2px;
} */
</style>
../program/data