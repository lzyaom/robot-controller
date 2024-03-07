<script setup lang="ts"></script>

<template>
  <div class="toolbar">
    <div class="tool-item move-up">up</div>
    <div class="tool-item move-down">down</div>
    <div class="tool-item copy">copy</div>
    <div class="tool-item cut">cut</div>
    <div class="tool-item paste">paste</div>
    <div class="tool-item forward">forward</div>
    <div class="tool-item backward">backward</div>
    <div class="tool-item delete">delete</div>
  </div>
</template>

<style type="css">
.toolbar {
  > .tool-item {
    @apply inline-block h-8 bg-gray-800 text-white text-center px-3 py-2 leading-none;
  }
  & > :not(:last-child) {
    @apply mr-2;
  }
}
</style>
