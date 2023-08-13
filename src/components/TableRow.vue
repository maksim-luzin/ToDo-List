<template>
  <div class="table-row" @click="setEdit">
    <div class="done" @click.stop="switchDoneTask">
      <div class="done__border">
        <font-awesome-icon :icon="['fas', 'check']" v-show="props.task.done" />
      </div>
    </div>
    <input class="task-edit" v-if="isEdit" v-model="task" @keypress.enter="save" v-focus />
    <div class="task" v-else>{{ task }}</div>
    <div class="edit" @click="save" v-if="isEdit">
      <font-awesome-icon :icon="['fas', 'floppy-disk']" />
    </div>
    <div class="edit" @click.stop="setEdit" v-else>
      <font-awesome-icon :icon="['fas', 'pen']" />
    </div>
    <div class="delete">
      <font-awesome-icon :icon="['fas', 'trash-can']" @click.stop="$emit('delete')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'

import { ActionTypes, GetterTypes, MutationTypes } from '@/common/enums'
import { type ITableRowProps } from '@/common/interfaces'

const store = useStore()
const props = defineProps<ITableRowProps>()

const isEdit = computed(() => store.getters[GetterTypes.IsEditTask](props.task.id))

const task = ref(props.task.task)

const setEdit = () => {
  store.commit(MutationTypes.EditTask, props.task.id)
}

const save = () => {
  store.dispatch({
    type: ActionTypes.UpdateTask,
    payload: { ...props.task, task: task.value }
  })
}

const switchDoneTask = () => {
  store.dispatch({
    type: ActionTypes.SwitchDoneTask,
    payload: { ...props.task, done: !props.task.done }
  })
}
</script>

<style lang="scss">
.table-row {
  box-sizing: border-box;
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: stretch;

  border: 1px #eee solid;

  cursor: pointer;

  &:hover .edit,
  &:hover .delete {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.task-edit {
  flex-grow: 1;
  flex-shrink: 1;

  border: 0;
  outline: 0;

  font-size: 1rem;
  font-weight: 500;

  background-color: #222;
  color: #eee;

  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
