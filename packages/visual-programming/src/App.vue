<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'
import Layout from './layout/index.vue'
import Draggable from './components/draggable.vue'
import type { Command } from 'types/command'

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
const clone = (e: Command) => {
  console.log('clone::', e)
  const target = Object.assign({}, e)
  target.id = Date.now().toString(16)
  if (target.isBlock) {
    target.children = []
  }
  return target
}
const change = (e: any) => {
  console.log('change:::', e)
}

const add = (e: any) => {
  console.log('add::', e)
}
const end = (e: any) => {
  console.log('end::', e)
}

let currentComponent: Component | null = null

const list = ref<Array<Command>>([])
</script>

<template>
  <Layout>
    <template #sider>
      <Draggable
        class="commands"
        :list="commands"
        :group="{ name: 'command', pull: 'clone', put: false }"
        :sort="false"
        :clone="clone"
      >
      </Draggable>
    </template>
    <div class="w-2/3 h-full p-4 bg-slate-50">
      <h3 class="text-center">文件名：</h3>
      <Draggable
        class="view-area"
        :list="list"
        :level="0"
        :animation="true"
        @change="(e) => change(e)"
        @add="add"
        @end="end"
      >
      </Draggable>
    </div>
    <div class="w-1/3 h-full p-4">
      <div class="w-2/5">属性编辑区</div>
      <component :is="currentComponent"></component>
    </div>
  </Layout>
</template>

<style>
.commands > .list-item {
  margin-bottom: 10px;
}

.view-area .list-item {
  margin-bottom: 2px;
}
</style>
