<template>
  <div class="container mx-auto mt-10">
    <div class="max-w-md mx-auto bg-white border border-gray-300 shadow-md rounded p-6">
      <h2 class="text-2xl font-bold mb-4">Task List</h2>
      <form @submit.prevent="addNewTask" class="flex">
        <input
          v-model="newTask"
          placeholder="Add a new task"
          class="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <ul class="mt-6 space-y-4">
        <li
          v-for="task in tasks"
          :key="task._id"
          class="flex items-center justify-between bg-gray-50 shadow-sm rounded p-4"
        >
          <div class="flex items-center">
            <input
              type="checkbox"
              :checked="task.completed"
              @change="toggleCompletion(task)"
              class="mr-3 h-5 w-5"
            />
            <span
              :class="{
                'line-through text-gray-500': task.completed,
                'text-gray-800': !task.completed,
              }"
            >
              {{ task.name }}
            </span>
          </div>
          <button
            @click="deleteTask(task._id)"
            class="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/taskStore";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    tasks() {
      const store = useTaskStore();
      return store.filteredTasks;
    },
  },
  methods: {
    async addNewTask() {
      if (this.newTask.trim() === "") return;
      const store = useTaskStore();
      await store.createTask({ name: this.newTask, completed: false });
      this.newTask = "";
    },
    async toggleCompletion(task) {
      const store = useTaskStore();
      await store.toggleTaskCompletion(task);
    },
    async deleteTask(id) {
      const store = useTaskStore();
      await store.removeTask(id);
    },
  },
  mounted() {
    const store = useTaskStore();
    store.fetchTasks();
  },
};
</script>
