<template>
  <div class="wrapper">
    <h1 class="header">TODO LIST</h1>
    <main class="main">
      <input-to-do />
      <to-do-table />
    </main>
    <notifications />
  </div>
</template>

<script setup lang="ts">
import InputToDo from './components/InputToDo.vue'
import ToDoTable from './components/ToDoTable.vue'
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;

  background-color: #222;
  color: #eee;
}

.header {
  width: 100%;
  max-width: 1000px;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 32px;
  font-weight: 700;

  display: flex;
  justify-content: center;
}

.main {
  height: 100%;
  width: 100%;
  max-width: 1000px;

  margin-left: auto;
  margin-right: auto;
}
</style>
