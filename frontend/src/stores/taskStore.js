import { defineStore } from "pinia";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [], // Lista de tareas
    filter: "all", // Filtro actual ('all', 'completed', 'not_completed')
  }),
  getters: {
    filteredTasks(state) {
      if (state.filter === "completed") {
        return state.tasks.filter((task) => task.completed);
      } else if (state.filter === "not_completed") {
        return state.tasks.filter((task) => !task.completed);
      }
      return state.tasks;
    },
  },
  actions: {
    async fetchTasks() {
      try {
        this.tasks = await getTasks();
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    async createTask(task) {
      try {
        const newTask = await addTask(task);
        this.tasks.push(newTask);
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
    async toggleTaskCompletion(task) {
      try {
        const updatedTask = await updateTask(task._id, {
          completed: !task.completed,
        });
        // Actualizar la tarea en el estado local
        const index = this.tasks.findIndex((t) => t._id === task._id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
      } catch (error) {
        console.error("Error toggling task completion:", error);
      }
    },
    async removeTask(id) {
      try {
        await deleteTask(id);
        this.tasks = this.tasks.filter((task) => task._id !== id);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
});
