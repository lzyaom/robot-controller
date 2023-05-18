<script setup lang="ts">
import draggable from './components/draggable.vue'
</script>

<template>
  <header>操作区</header>
  <main>
    <draggable />
  </main>
  <footer></footer>
  <aside></aside>
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
