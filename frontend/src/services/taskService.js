import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

/**
 * Updates a task with the given ID using the provided updates.
 *
 * @param {string} id - The ID of the task to update.
 * @param {Object} updates - An object containing the updates to apply to the task.
 * @returns {Promise<Object>} A promise that resolves to the updated task data.
 */
export const updateTask = async (id, updates) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
