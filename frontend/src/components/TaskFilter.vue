<template>
  <nav class="bg-blue-600 text-white py-4 shadow-md">
    <div class="container mx-auto flex justify-center space-x-4">
      <button
        @click="filter('all')"
        class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        All
      </button>
      <button
        @click="filter('completed')"
        class="px-4 py-2 bg-green-500 rounded hover:bg-green-700"
      >
        Completed
      </button>
      <button
        @click="filter('not_completed')"
        class="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-700"
      >
        Not Completed
      </button>
    </div>
  </nav>
</template>

<script>
import { useTaskStore } from "../stores/taskStore";

export default {
  methods: {
    filter(status) {
      const store = useTaskStore();
      store.setFilter(status);
    },
  },
};
</script>
