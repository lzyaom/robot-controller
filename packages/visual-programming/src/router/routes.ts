import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    name: 'program',
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: {
      name: 'file',
    },
    meta: {
      label: '程序文件',
    },
    children: [
      {
        name: 'file',
        path: '/program',
        component: () => import('@/pages/program/history/index.vue'),
      },
    ],
  },
  {
    name: 'editor',
    path: '/editor/:id',
    component: () => import('@/pages/program/editor/index.vue'),
    meta: {
      label: '编程',
      hidden: true,
    },
  },
  {
    name: 'pluginMange',
    path: '/plugin',
    component: () => import('@/layout/index.vue'),
    redirect: {
      name: 'plugin',
    },
    meta: {
      label: '插件',
    },
    children: [
      {
        name: 'plugin',
        path: '',
        component: () => import('@/pages/plugins/index.vue'),
      },
    ],
  },
  {
    name: 'settingManage',
    path: '/setting',
    component: () => import('@/layout/index.vue'),
    redirect: {
      name: 'setting',
    },
    meta: {
      label: '设置',
    },
    children: [
      {
        name: 'setting',
        path: '',
        component: () => import('@/pages/setting/index.vue'),
      },
    ],
  },
]

export default routes
