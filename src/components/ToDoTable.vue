<template>
  <table-header />
  <div class="table-body">
    <template v-for="task of tasks" :key="task.id">
      <table-row :task="task" @delete="confirmDelete(task.id)" />
    </template>
  </div>
  <delete-confirmation :id="deleteConfirmationId" @close="confirmDelete" />
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useStore } from '@/store'

import { ActionTypes, GetterTypes, MutationTypes } from '@/common/enums'

import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import DeleteConfirmation from './DeletionConfirmation.vue'

const store = useStore()

const tasks = computed(() => store.getters[GetterTypes.GetTasks])
const deleteConfirmationId = ref<string>()

const confirmDelete = (deleteId: string | undefined): void => {
  deleteConfirmationId.value = deleteId
  store.commit(MutationTypes.EditTask, undefined)
}

onMounted(() => {
  setTimeout(() => {
    store.dispatch({
      type: ActionTypes.GetAllTasks
    })
  }, 100)
})
</script>

<style lang="scss">
.table-body {
  box-sizing: border-box;
  height: calc(100vh - 16rem);
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0;
  }
}

.done {
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.done__border {
  width: 1rem;
  height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #eee;
}

.task {
  flex-grow: 1;
  flex-shrink: 1;

  display: flex;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 1rem;
  font-weight: 500;
}

.edit,
.delete {
  width: 2rem;

  display: none;
}
</style>
