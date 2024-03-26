<script setup lang="ts">
// import {} from 'vue'
import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NCollapse,
  NCollapseItem,
} from 'naive-ui'
import PluginItem from './components/pluginItem.vue'
import type { Plugin } from 'types/plugin'

const plugins: Plugin[] = [
  {
    type: '',
    name: 'aaa',
    describe: 'aaa',
    icon: '',
    author: '1111',
  },
  {
    type: '',
    name: 'bbb',
    describe: 'bbb',
    icon: '',
  },
]
</script>

<template>
  <NLayout class="plugins-page pt-4 px-4" has-sider>
    <NLayoutSider class="w-1/5">
      <n-collapse>
        <n-collapse-item title="已安装" name="1">
          <PluginItem v-for="item in plugins" v-bind="item"></PluginItem>
        </n-collapse-item>
        <n-collapse-item title="商店" name="2"></n-collapse-item>
      </n-collapse>
    </NLayoutSider>
    <NLayoutContent class="w-4/5">
      <div class="plugin-page">plugin</div>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped></style>
