<template>
    <div class="bg-gray-100 min-h-screen">
    <TaskFilter />
    <TaskList />
  </div>
  </template>
  
  <script>
  import TaskFilter from "./TaskFilter.vue";
  import TaskList from "./TaskList.vue";
  
  export default {
    components: {
      TaskFilter,
      TaskList,
    },
  };
  </script>
  