import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.BE_HOST || 'localhost'}:${process.env.BE_PORT || 3001}/`,
});

const generateTasks = async (endpoint) => {
  const {data} = await api.get(endpoint);
  return data;
}

const generateNewTasks = async (endpoint, newTask) => {
  const data = await api.post(endpoint, newTask);
  return data;
}

const updateTasks = async (endpoint, newTask) => {
  const data = await api.put(endpoint, newTask);
  return data;
}

const deleteTasks = async (endpoint) => {
  const data = await api.delete(endpoint);
  return data;
}
export default api;
export { generateTasks, generateNewTasks, updateTasks, deleteTasks }
