<script lang="ts" setup>
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent } from 'naive-ui'

defineOptions({
  name: 'AppLayout',
})
</script>

<template>
  <NLayout :native-scrollbar="false" position="absolute">
    <NLayoutHeader class="h-16 bg-black text-white"> 头部 </NLayoutHeader>
    <NLayout position="absolute" style="top: 4rem" has-sider>
      <NLayoutSider
        class="w-1/5"
        position="absolute"
        content-style="padding: 10px"
      >
        <slot name="sider"></slot>
      </NLayoutSider>
      <NLayoutContent position="absolute" class="w-4/5">
        <slot></slot>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>
