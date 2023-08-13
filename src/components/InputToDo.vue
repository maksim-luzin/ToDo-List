<template>
  <form class="new-task" @submit.prevent="addNewTask">
    <input
      name="new-task"
      type="text"
      class="new-task__body"
      maxlength="57"
      v-model.trim="newTask"
    />
    <button class="new-task__add">Add task</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/common/enums'

const store = useStore()

const newTask = ref<string>()

const addNewTask = () => {
  store.dispatch({
    type: ActionTypes.CreateTask,
    payload: newTask.value
  })

  newTask.value = ''
}
</script>

<style scoped lang="scss">
.new-task {
  width: 100%;
  height: 2rem;

  margin-top: 2rem;
  margin-bottom: 3rem;

  display: flex;
  align-items: stretch;
}

.new-task__body {
  flex-grow: 1;
  flex-shrink: 1;

  border: 1px solid #eee;
  border-right: 0;
  outline: 0;

  font-size: 1rem;
  font-weight: 500;

  background-color: #222;
  color: #eee;
}

.new-task__add {
  width: 7rem;

  border: 1px solid #eee;
  border-left: 0;
  cursor: pointer;

  background-color: #444;
  color: #e3e3e3;

  font-size: 1rem;
  font-weight: 800;

  &:hover {
    color: #aaa;
  }
}
</style>
