import { defineStore } from "pinia";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

/**
 * Task Store
 *
 * @typedef {Object} Task
 * @property {string} _id - Unique identifier for the task
 * @property {string} title - Title of the task
 * @property {boolean} completed - Completion status of the task
 *
 * @typedef {Object} State
 * @property {Task[]} tasks - List of tasks
 * @property {string} filter - Current filter ('all', 'completed', 'not_completed')
 *
 * @typedef {Object} Getters
 * @property {function(State): Task[]} filteredTasks - Returns tasks based on the current filter
 *
 * @typedef {Object} Actions
 * @property {function(): Promise<void>} fetchTasks - Fetches tasks from the server and updates the state
 * @property {function(Task): Promise<void>} createTask - Creates a new task and adds it to the state
 * @property {function(Task): Promise<void>} toggleTaskCompletion - Toggles the completion status of a task
 * @property {function(string): Promise<void>} removeTask - Removes a task by its ID
 * @property {function(string): void} setFilter - Sets the current filter
 *
 * @type {import('pinia').DefineStore<"taskStore", State, Getters, Actions>}
 */
/**
 * A store for managing tasks with state, getters, and actions.
 *
 * @typedef {Object} Task
 * @property {string} _id - The unique identifier of the task.
 * @property {string} title - The title of the task.
 * @property {boolean} completed - The completion status of the task.
 *
 * @typedef {Object} TaskStoreState
 * @property {Task[]} tasks - The list of tasks.
 * @property {string} filter - The current filter ('all', 'completed', 'not_completed').
 *
 * @typedef {Object} TaskStoreGetters
 * @property {function(TaskStoreState): Task[]} filteredTasks - Returns the tasks filtered by the current filter.
 *
 * @typedef {Object} TaskStoreActions
 * @property {function(): Promise<void>} fetchTasks - Fetches tasks from the server and updates the state.
 * @property {function(Task): Promise<void>} createTask - Creates a new task and adds it to the state.
 * @property {function(Task): Promise<void>} toggleTaskCompletion - Toggles the completion status of a task.
 * @property {function(string): Promise<void>} removeTask - Removes a task by its ID.
 * @property {function(string): void} setFilter - Sets the current filter.
 *
 * @typedef {Object} TaskStore
 * @property {TaskStoreState} state - The state of the task store.
 * @property {TaskStoreGetters} getters - The getters of the task store.
 * @property {TaskStoreActions} actions - The actions of the task store.
 *
 * @returns {TaskStore} The task store.
 */
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
    /**
     * Toggles the completion status of a task.
     *
     * @param {Object} task - The task object to toggle completion status.
     * @param {string} task._id - The unique identifier of the task.
     * @param {boolean} task.completed - The current completion status of the task.
     * @returns {Promise<void>} - A promise that resolves when the task completion status has been toggled.
     * @throws {Error} - Throws an error if there is an issue toggling the task completion.
     */
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
    /**
     * Removes a task by its ID.
     *
     * This function attempts to delete a task from the server using the provided ID.
     * If the deletion is successful, it updates the local tasks array by filtering out the deleted task.
     * If an error occurs during the deletion process, it logs the error to the console.
     *
     * @param {string} id - The ID of the task to be removed.
     * @returns {Promise<void>} A promise that resolves when the task is removed.
     */
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
