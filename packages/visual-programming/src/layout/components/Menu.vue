<template>
  <NMenu
    v-model:value="active"
    mode="horizontal"
    :options="menuOptions"
  ></NMenu>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import routes from '@/router/routes'

const menuOptions: MenuOption[] = routes
  .filter((item: RouteRecordRaw) => !item.meta!.hidden)
  .map((item) => ({
    label: () =>
      h(
        RouterLink,
        { to: { name: item.name }, class: 'router' },
        { default: () => item.meta!.label }
      ),
    key: item.name,
  })) as MenuOption[]
const active = ref<string | null>(menuOptions[0].key as string)
</script>

<style>
.n-menu.n-menu--horizontal
  .n-menu-item-content
  .n-menu-item-content-header
  .router {
  color: #8b8b8b;
}
</style>
