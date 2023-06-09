<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { iTask } from './types';

const tasks = ref<iTask[]>([])
const newTaskInput = ref("")

const addTask = async () => {
  let response = await fetch("https://netlify-demo-vue-3.netlify.app/.netlify/functions/addtask", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newTaskInput.value
    })
  })
  
  const newTask = await response.json()
  tasks.value.push(newTask[0])
  newTaskInput.value = ""
}

const removeTask = async (id: number) => {
  await fetch("https://netlify-demo-vue-3.netlify.app/.netlify/functions/deletetask", {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id  })
  })
  tasks.value = tasks.value.filter(t => t.id !== id)
}

onMounted(async () => {
  const response = await fetch("https://netlify-demo-vue-3.netlify.app/.netlify/functions/listtasks")
  tasks.value = await response.json()
})
</script>

<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <div class="add-task-wrapper">
      <input type="text" v-model="newTaskInput" @keydown.enter="addTask">
      <button @click="addTask">Add task</button>
    </div>
    <div class="task" v-for="task in tasks" :key="task.id">
      <div class="task-main">
        <span>{{ task.name }}</span>
        <span class="buttons">
          <button @click="removeTask(task.id)">❌</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto
}
.add-task-wrapper {
  display: flex;
  column-gap: 16px;
}

.add-task-wrapper input {
  flex: 1;
}

.task {
  margin: 8px 0;
  background-color: #eaeded;
  padding: 8px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
}
.task-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
