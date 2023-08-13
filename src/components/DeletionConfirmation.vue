<template>
  <div class="wrapper" @click="$emit('close')" v-if="props.id">
    <div class="body">
      <font-awesome-icon :icon="['fas', 'xmark']" class="close" @click.stop="$emit('close')" />
      <h3 class="confirmation-body">Would you like to delete this task?</h3>
      <div class="buttons">
        <button class="delete-yes" @click.stop="remove">Yes</button>
        <button class="delete-no" @click.stop="$emit('close')">No</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

import { ActionTypes } from '@/common/enums'
import { type IDeletionConfirmationProps } from '@/common/interfaces'

const store = useStore()
const emit = defineEmits(['close'])
const props = defineProps<IDeletionConfirmationProps>()

const remove = () => {
  store.dispatch({
    type: ActionTypes.DeleteTask,
    payload: props.id
  })

  emit('close')
}
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba($color: #444, $alpha: 0.9);

  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.body {
  width: 30rem;
  height: 8rem;

  position: relative;

  border: 1px solid #eee;
  border-radius: 5px;
}

.close {
  position: absolute;
  right: 5px;
  top: 5px;

  cursor: pointer;
}

.confirmation-body {
  font-size: 1.5rem;
  font-weight: 800;

  display: flex;
  justify-content: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.delete-yes,
.delete-no {
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 800;

  cursor: pointer;

  background-color: #333;
  color: #eee;

  &:hover {
    background-color: #444;
  }
}
</style>
