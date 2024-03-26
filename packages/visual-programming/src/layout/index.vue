<script lang="ts" setup>
import { NLayout, NLayoutHeader } from 'naive-ui'
import Menu from './components/Menu.vue'
defineOptions({
  name: 'AppLayout',
})
</script>

<template>
  <NLayout :native-scrollbar="false">
    <NLayoutHeader class="h-12 bg-amber-200 text-white">
      <Menu></Menu>
    </NLayoutHeader>
    <RouterView v-slot="{ Component }">
      <component :is="Component"></component>
    </RouterView>
    <!-- <NLayout style="top: 4rem" has-sider>
      <NLayoutSider
        class="w-1/5"
        position="absolute"
        content-style="padding: 10px"
      >
        <slot name="sider"></slot>
      </NLayoutSider>
      <NLayoutContent class="w-4/5">
        <slot></slot>
      </NLayoutContent>
    </NLayout> -->
  </NLayout>
</template>
