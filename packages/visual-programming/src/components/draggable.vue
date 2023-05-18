<script lang="ts" setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

defineOptions({
  name: 'custom-clone',
  display: 'Custom Clone',
})
let idGlobal = 8

const list1 = [
  { name: 'dog 1', id: 1 },
  { name: 'dog 2', id: 2 },
  { name: 'dog 3', id: 3 },
  { name: 'dog 4', id: 4 },
]
const list2 = ref([
  { name: 'cat 5', id: 5 },
  { name: 'cat 6', id: 6 },
  { name: 'cat 7', id: 7 },
])
const log = (evt: any) => {
  console.log(evt)
}
const cloneDog = ({ id }: { id: number }) => {
  return {
    id: idGlobal++,
    name: `cat ${id}`,
  }
}
</script>

<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
  border: 1px solid #f1f1f1;
}

.list-group-item {
  cursor: grab;
  height: 36px;
  line-height: 36px;
  text-align: center;
}

.list-group-item i {
  cursor: pointer;
}
</style>
